import apis from '../../shared/api/main';
import Swal from 'sweetalert2';

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
  console.log('comment를 가져올거야!');
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
  console.log('댓글불러오기', payload);
  try {
    const loadCommentData = await apis.getBoardComment(payload);
    console.log(loadCommentData.data);
    dispatch(getBoardComment(loadCommentData.data));
  } catch (error) {
    console.log(error);
  }
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
    console.log(error);
    if (error.response.status === 401) {
      Swal.fire({
        title: '아직 회원이 아니신가요?',
        text: '로그인을 해주세요!',
        icon: 'warning',
        confirmButtonText: '확인',
      });
    }
  }
};

export const __deleteBoardComment =
  (boardId, commentId) => async (dispatch, getState) => {
    try {
      console.log('삭제하기', boardId, commentId);
      const response = await apis.deleteBoardComment(boardId, commentId);
      console.log(response.data);
      dispatch(deleteBoardComment(response.data));

      Swal.fire({
        title: '삭제 완료!!',
        icon: 'success',
        confirmButtonText: '확인',
      });
    } catch (error) {
      console.log(error);
      if (error.response.status === 500) {
        alert('내가 쓴 댓글만 삭제할 수 있습니다.');
      }
    }
  };

export const __updateBoardComment = (payload) => async (dispatch, getState) => {
  try {
    console.log('수정', payload);
    const response = await apis.updateBoardComment(
      payload.boardId,
      payload.commentId,
      {
        comment: payload.data.comment,
      }
    );
    console.log('response data', response.data);
    dispatch(updateBoardComment(response.data));
  } catch (error) {
    console.log(error);
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
      console.log('comment', action.payload);
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
