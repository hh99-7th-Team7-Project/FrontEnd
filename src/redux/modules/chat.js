import apis from '../../shared/api/main';
import Swal from 'sweetalert2';
import * as Sentry from "@sentry/react";

const initialState = {};

/* ----------------- 액션 타입 ------------------ */

const LOAD_CHATLISTS = 'chat_reducer/LOAD';
const LOAD_CHAT_DETAIL = 'chat_reducer/DETAIL';
const LOAD_ONE_CHATITEM = 'chat_reducer/LOADCHAT';
const ADD_CHATITEM = 'chat_reducer/ADD';
const UPDATE_CHATITEM = 'chat_reducer/UPDATE';
const DELETE_CHATITEM = 'chat_reducer/DELETE';

const PREV_POST_CHAT = 'PREV_POST_CHAT';

/* ----------------- 액션 생성 함수 ------------------ */

export function loadChatLists(payload) {
  return { type: LOAD_CHATLISTS, payload };
}

export function loadChatDetail(payload) {
  return { type: LOAD_CHAT_DETAIL, payload };
}

export function loadOneChatItem(payload) {
  return { type: LOAD_ONE_CHATITEM, payload };
}

export function addChatItem(payload) {
  return { type: ADD_CHATITEM, payload };
}
export function updateChatItem(payload) {
  return { type: UPDATE_CHATITEM, payload };
}
export function deleteChatItem(payload) {
  return { type: DELETE_CHATITEM, payload };
}

// export function prevChat(payload) {
//   return { type: PREV_CHAT, payload };
// }

export function prevPostChat(payload) {
  return { type: PREV_POST_CHAT, payload };
}

/* ----------------- 미들웨어 ------------------ */
export const __loadChatLists = (page) => {
  return async function (dispatch) {
    try{const loadData = await apis.getChatLists(page);
    // console.log(loadData.data);
    dispatch(loadChatLists(loadData.data));}
    catch(error){
      Sentry.captureException(error);
    }
  };
};

export const __loadOneChatItem = (id) => {
  return async function (dispatch) {
    const loadData = await apis.getOneChatItem(id);
    // console.log(loadData.data);
    dispatch(loadOneChatItem(loadData.data));
  };
};

export const __addChatItem = (chatitem) => {
  return async function (dispatch) {
    try{
      const loadData = await apis.addChatItem(chatitem)
      // console.log(loadData)
      dispatch(addChatItem(loadData.data))
       Swal.fire({
      title: '저장 완료!',
      icon: 'success',
      confirmButtonText: '확인',
    });
    }catch(error){
      Sentry.captureException(error);
    }
  };
};

export const __prevPostChat = (chatpostId) => {
  return async function (dispatch) {
   try{ const loadData = await apis.prepostchat(chatpostId);
    // console.log(loadData);
    dispatch(prevPostChat(loadData.data));}
    catch(error){
      Sentry.captureException(error);
    }
  };
};

export const __updateChatItem = (data, id) => async (dispatch, getState) => {
  try {
    // console.log('수정', data, id);
    const response = await apis.updateChatItem(data, id);
    // console.log('response data', response.data);
    dispatch(updateChatItem(response.data));
    dispatch(loadOneChatItem(response.data));
  } catch (error) {
    Sentry.captureException(error);
    console.log(error);
  }
};

export default function ChatReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LOAD_CHATLISTS: {
      return { list: action.payload };
    }
    case LOAD_ONE_CHATITEM: {
      return { ...state, one_list: action.payload };
    }
    case ADD_CHATITEM: {
      return { ...state, list: [...state.list, action.payload] };
    }
    case DELETE_CHATITEM: {
      return state.list.filter((list) => list.id !== action.id);
    }
    case UPDATE_CHATITEM: {
      return { ...state, one_list: action.payload };
    }
    // case PREV_CHAT: {
    //   return { prev_list: action.payload.list };
    // }
    case PREV_POST_CHAT: {
      return { post_list: action.payload };
    }
    default:
      return state;
  }
}
