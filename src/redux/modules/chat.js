import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import apis from '../../shared/api/main';

const PREV_CHAT = 'PREV_CHAT';
const PREV_POST_CHAT = 'PREV_POST_CHAT';

const prevChat = createAction(PREV_CHAT, (list) => ({ list }));
const prevPostChat = createAction(PREV_POST_CHAT, (list) => ({ list }));

const initialState = {
  list: [],
  post_list: [],
};

const prevChatDB = (props) => {
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

const prevPostChatDB = (pid) => {
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

export default handleActions(
  {
    [PREV_CHAT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [PREV_POST_CHAT]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  prevChatDB,
  prevPostChatDB,
};

export { actionCreators };
