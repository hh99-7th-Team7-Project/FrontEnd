import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';
import Swal from 'sweetalert2';
import * as Sentry from "@sentry/react";

const nickname = getCookie('nickname');

// initialState

const initialState = {
  posts: [],
};

// action

const ADD_COMMENT = 'comment_reducer/ADD_COMMENT';
const LOAD_COMMENT = 'comment_reducer/LOAD_COMMENT';
const DELETE_COMMENT = 'comment_reducer/DELETE_COMMENT';
const UPDATE_COMMENT = 'comment_reducer/UPDATE_COMMENT';
const GET_AVE_STAR = 'comment_reducer/GET_AVE_STAR';

// action creator

export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};
export const loadComment = (payload) => {
  return {
    type: LOAD_COMMENT,
    payload,
  };
};

export const deleteComment = (payload) => {
  return {
    type: DELETE_COMMENT,
    payload,
  };
};

export const updateComment = (payload) => {
  return {
    type: UPDATE_COMMENT,
    payload,
  };
};

export const getAveStar = (payload) => {
  return {
    type: GET_AVE_STAR,
    payload,
  };
};

// middleware

export const __addComment = (payload) => async (dispatch, getState) => {
  try {
    const response = await apis.postComment(
      payload.brand,
      payload.boardId,
      payload.data
    );

    Swal.fire({
      title: '한줄평 등록 완료!!',
      icon: 'success',
      confirmButtonText: '확인',
    });

    dispatch(addComment(response.data));
  } catch (error) {
    Sentry.captureException(error);
    if (error.response.status === 401) {
      Swal.fire({
        title: '로그인 후 이용 가능한 서비스입니다',
        icon: 'error',
        confirmButtonText: '확인',
      });
    }
  }
};

export const __updateComment = (payload) => async (dispatch, getState) => {
  try {
    const response = await apis.updateComment(
      payload.brand,
      payload.boardId,
      payload.commentId,
      {
        review: payload.data.review,
        star: 5,
      }
    );

    dispatch(updateComment(response.data));
  } catch (error) {
    Sentry.captureException(error);
  }
};

export const __loadComment = (payload) => async (dispatch, getState) => {
  try {
    const posts = await apis.getComment(payload.brand, payload.boardId);
    dispatch(loadComment(posts.data));
  } catch (error) {
    Sentry.captureException(error);
  }
};

export const __deleteComment =
  (brand, boardId, reviewId) => async (dispatch, getState) => {
    try {
      const response = await apis.deleteComment(brand, boardId, reviewId);
      dispatch(deleteComment(response.data));
      Swal.fire({
        title: '삭제 완료!!',
        icon: 'success',
        confirmButtonText: '확인',
      });
    } catch (error) {
      Sentry.captureException(error);
      if (error.response.status === 500) {
        Swal.fire({
          title: '내가 쓴 한줄평만 삭제할 수 있습니다.',
          icon: 'error',
          confirmButtonText: '확인',
        });
      }
    }
  };

export const __getAverageStar =
  (brand, boardId) => async (dispatch, getState) => {
    try {
      const response = await apis.getAveComment(brand, boardId);
      dispatch(getAveStar(response));
    } catch (error) {
      Sentry.captureException(error);
    }
  };

// reducer

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        posts: [action.payload, ...state.posts ],
      };
    case LOAD_COMMENT:
      return {
        ...state,
        posts: [...action.payload],
      };
    case DELETE_COMMENT:
      const new_comment_list = state.posts.filter((item, index) => {
        return action.payload !== item.id;
      });
      return {
        ...state,
        posts: [...new_comment_list],
      };
    case UPDATE_COMMENT:
      const updateCommentList = state.posts.map((value, id) => {
        return value.id === Number(action.payload.id) ? action.payload : value;
      });
      return {
        ...state,
        posts: updateCommentList,
      };
    default:
      return state;
  }
}
