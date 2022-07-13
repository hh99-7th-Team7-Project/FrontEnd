// import produce from 'immer';
import apis from '../../shared/api/main';
// import { addChatItemDB } from './chatlist';

const initialState = {
  list: [],
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_CHAT = 'chat_reducer/LOAD';
const LOAD_CHATLISTS = 'chat_reducer/LOAD';
const LOAD_CHAT_DETAIL = 'chat_reducer/DETAIL';
const LOAD_ONE_CHATITEM = 'chat_reducer/LOAD';
const ADD_CHATITEM = 'chat_reducer/ADD';
const UPDATE_CHATITEM = 'chat_reducer/UPDATE';
const DELETE_CHATITEM = 'chat_reducer/DELETE';
const PREV_CHAT = 'PREV_CHAT';
const PREV_POST_CHAT = 'PREV_POST_CHAT';

/* ----------------- 액션 생성 함수 ------------------ */
export function loadChat(payload) {
  return { type: LOAD_CHAT, payload };
}

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

export function prevChat(payload) {
  return { type: PREV_CHAT, payload };
}

export function prevPostChat(payload) {
  return { type: PREV_POST_CHAT, payload };
}

/* ----------------- 미들웨어 ------------------ */
export const __loadChat = () => {
  return async function (dispatch) {
    const loadData = await apis.getChat();
    console.log(loadData.data);
    dispatch(loadChat(loadData.data));
  };
};

export const __loadChatLists = () => {
  return async function (dispatch) {
    const loadData = await apis.getChatLists();
    console.log(loadData.data);
    dispatch(loadChat(loadData.data));
  };
};

export const __loadChatDetail = () => {
  return async function (dispatch) {
    const loadData = await apis.getChatDetail();
    console.log(loadData.data);
    dispatch(loadChatDetail(loadData.data));
  };
};

export const __loadOneChatItem = (id) => {
  return async function (dispatch) {
    const loadData = await apis.getOneChatItem(id);
    console.log(loadData.data);
    dispatch(loadOneChatItem(loadData.data));
  };
};

export const __addChatItem = (chatitem) => {
  return async function (dispatch) {
    const loadData = await apis.addChatItem(chatitem);
    console.log(loadData);
    dispatch(addChatItem(loadData.data));
  };
};

export const prevChatDB = (props) => {
  return function (dispatch, getState, { history }) {
    apis
      .prechat()
      .then((res) => {
        const status = res.data;
        dispatch(prevChat(status));
        console.log(status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const prevPostChatDB = (pid) => {
  return function (dispatch, getState) {
    apis
      .prepostchat(pid)
      .then((res) => {
        const status = res.data;
        dispatch(prevPostChat(status));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const __updateChatItem = (data, id) => async (dispatch, getState) => {
  try {
    console.log('수정', data, id);
    // const response = await apis.updateChatItem(payload, {
    //   title: payload.title,
    //   contents: payload.contents,
    //   calendar: payload.calendar,
    //   map: payload.map,
    //   totalcount: payload.totalcount,
    // });
    const response = await apis.updateChatItem(data, id);
    console.log('response data', response.data);
    dispatch(updateChatItem(response.data));
    dispatch(loadOneChatItem(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const __deleteChat = (id) => async (dispatch, getChatLists) => {
  try {
    console.log('삭제', id);
    const response = await apis.deleteChatItem(id);
    console.log(response);
    alert('삭제완료!');

    // const chat_idx = loadData.data.findIndex((c) => {
    //   return parseInt(c.id) === parseInt(id);
    // });
    // dispatch(deleteChatItem(id));
  } catch (error) {
    console.log(error);
  }
};

export default function ChatReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LOAD_CHAT: {
      return { list: action.payload };
    }
    case LOAD_CHATLISTS: {
      return { list: action.payload };
    }
    case LOAD_CHAT_DETAIL: {
      return { ...state, coffee: action.payload };
    }
    case LOAD_ONE_CHATITEM: {
      return { ...state, post_list: action.payload };
    }
    case ADD_CHATITEM: {
      return { ...state, list: [...state.list, action.payload] };
    }
    // case DELETE_CHATITEM: {
    //   return state.filter((list) => list.id !== action.id);
    // }
    default:
      return state;
  }
}
