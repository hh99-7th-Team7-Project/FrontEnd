import apis from '../../shared/api/main';
import Swal from 'sweetalert2';
import * as Sentry from "@sentry/react";

let intialstate = {
  boardcommentlist: [],
};
/* ----------------- 액션 타입 ------------------ */

const GET_BOARD_COMMENT = 'boardcomment_reducer/GET_BOARD_COMMENT';
const ADD_BOARD_COMMENT = 'boardcomment_reducer/ADD_BOARD_COMMENT';
const DELETE_BOARD_COMMENT = 'boardcomment_reducer/DELETE_BOARD_COMMENT';
const UPDATE_BOARD_COMMENT = 'boardcomment_reducer/UPDATE_BOARD_COMMENT';

// const CREATE_HEART = "COFFEE_reducer/CREATE";

/* ----------------- 액션 생성 함수 ------------------ */
export function getBoardComment(payload) {
  return {
    type: GET_BOARD_COMMENT,
    payload,
  };
}

export function addBoardComment(payload) {
  return {
    type: ADD_BOARD_COMMENT,
    payload,
  };
}

export function deleteBoardComment(payload) {
  return {
    type: DELETE_BOARD_COMMENT,
    payload,
  };
}

export function updateBoardComment(payload) {
  return {
    type: UPDATE_BOARD_COMMENT,
    payload,
  };
}

/* ----------------- 미들웨어 ------------------ */
export const __getBoardComment = (payload) => async (dispatch, getState) => {
  try {
    const loadCommentData = await apis.getBoardComment(payload);
    dispatch(getBoardComment(loadCommentData.data));
  } catch (error) {
    Sentry.captureException(error); }
};

export const __addBoardComment = (payload) => async (dispatch, getState) => {
  try {
    const response = await apis.postBoardComment(payload.boardId, payload.data);
    Swal.fire({
      title: '댓글 등록 완료!!',
      icon: 'success',
      confirmButtonText: '확인',
    });

    dispatch(addBoardComment(response.data));
  } catch (error) {
    Sentry.captureException(error);
    if (error.response.status === 401) {
      Swal.fire({
        title: '로그인 후 이용 가능한 서비스입니다',
        icon: 'warning',
        confirmButtonText: '확인',
      });
    }
  }
};

export const __deleteBoardComment =
  (boardId, commentId) => async (dispatch, getState) => {
    try {
      const response = await apis.deleteBoardComment(boardId, commentId);
      dispatch(deleteBoardComment(response.data));

      Swal.fire({
        title: '삭제 완료!!',
        icon: 'success',
        confirmButtonText: '확인',
      });
    } catch (error) {
      Sentry.captureException(error);
      if (error.response.status === 500) {
        alert('내가 쓴 댓글만 삭제할 수 있습니다.');
      }
    }
  };

export const __updateBoardComment = (payload) => async (dispatch, getState) => {
  try {
    const response = await apis.updateBoardComment(
      payload.boardId,
      payload.commentId,
      {
        comment: payload.data.comment,
      }
    );
    dispatch(updateBoardComment(response.data));
  } catch (error) {
    Sentry.captureException(error);
    if (error.response.status === 500) {
      alert('내가 쓴 댓글만 수정할 수 있습니다.');
    }
  }
};

/* ----------------- 리듀서 ------------------ */
export default function boardCommentReducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case GET_BOARD_COMMENT: {
      return { boardcommentlist: action.payload };
    }

    case ADD_BOARD_COMMENT: {
      return {
        ...state,
        boardcommentlist: [action.payload, ...state.boardcommentlist ],
      };
    }

    case DELETE_BOARD_COMMENT: {
      const new_boardcomment_list = state.boardcommentlist.filter(
        (item, index) => {
          return action.payload !== item.id;
        }
      );
      return {
        ...state,
        boardcommentlist: [...new_boardcomment_list],
      };
    }

    case UPDATE_BOARD_COMMENT: {
      const updateBoardCommentList = state.boardcommentlist.map((value, id) => {
        return value.id === Number(action.payload.id) ? action.payload : value;
      });
      return {
        ...state,
        boardcommentlist: updateBoardCommentList,
      };
    }
    default:
      return state;
  }
}
