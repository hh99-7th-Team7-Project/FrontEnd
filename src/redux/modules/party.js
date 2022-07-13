import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import apis from '../../shared/api/main';

import { actionCreators as chatActions } from './chat';

const GET_PARTY = 'GET_PARTY';
const GET_ONE_PARTY = 'GET_ONE_PARTY';
const GET_MY_PARTY = 'GET_MY_PARTY';
const ADD_PARTY = 'ADD_PARTY';
const EDIT_PARTY = 'EDIT_PARTY';
const ATTEND_PARTY = 'ATTEND_PARTY';
const CANCEL_PARTY = 'CANCEL_PARTY';
const DELETE_PARTY = 'DELETE_PARTY';

const getParty = createAction(GET_PARTY, (partyList) => ({ partyList }));
const getOneParty = createAction(GET_ONE_PARTY, (party) => ({ party }));
const getMyParty = createAction(GET_MY_PARTY, (partyList) => ({ partyList }));
const addParty = createAction(ADD_PARTY, (party) => ({ party }));
const editParty = createAction(EDIT_PARTY, (partyId, party) => ({
  partyId,
  party,
}));
const attendParty = createAction(ATTEND_PARTY, (user) => ({ user }));
const cancelParty = createAction(CANCEL_PARTY, (user) => ({ user }));
const deleteParty = createAction(DELETE_PARTY, (partyId) => ({ partyId }));

const initialState = {};

const getMyPartyDB = () => {
  return function (dispatch, getState) {
    apis
      .getMyParty()
      .then((res) => {
        dispatch(getMyParty(res.data));
      })
      .catch((err) => {
        console.log('(getMyParty) 실패 ::', err);
      });
  };
};

const getPartyDB = (pageNum) => {
  return function (dispatch, getState) {
    apis
      .getPartyList(pageNum)
      .then((res) => {
        dispatch(getParty(res.data));
      })
      .catch((err) => {
        console.log('(getPartyList) 실패 ::', err);
      });
  };
};

const getKeywordPartyDB = (pageNum, keyword) => {
  return function (dispatch, getState) {
    apis
      .searchParty(keyword, pageNum)
      .then((res) => {
        dispatch(getParty(res.data));
      })
      .catch((err) => {
        console.log('(searchParty) 실패 ::', err);
      });
  };
};

const getOnePartyDB = (partyId = null) => {
  return function (dispatch, getState) {
    apis
      .getOneParty(partyId)
      .then((res) => {
        dispatch(getOneParty(res.data));
      })
      .catch((err) => {
        console.log('(getOneParty) 실패 ::', err);
      });
  };
};

const addPartyDB = (party = {}) => {
  return function (dispatch, getState) {
    // console.log(party);
    apis
      .addParty(party)
      .then((res) => {
        dispatch(addParty(res.data));
        // dispatch(chatActions.addChatRoomDB(party.title, res.data.partyId)); // 작성할때 해당 partyId 채팅방 만들기
      })
      .catch((err) => {
        console.log('(addParty) 실패 ::', err);
      });
  };
};

const editPartyDB = (partyId = null, party = {}) => {
  return function (dispatch, getState) {
    apis
      .editParty(partyId, party)
      .then((res) => {
        dispatch(editParty(res.data));
      })
      .catch((err) => {
        console.log('(editParty) 실패 ::', err);
      });
  };
};

const attendPartyDB = (partyId = null) => {
  return function (dispatch, getState) {
    const _user = getState().user.userInfo;
    const user_info = {
      nickname: _user.nickname,
      userTitle: _user.userTitle,
      userImageUrl: _user.userImageUrl,
    };

    apis
      .attendParty(partyId)
      .then((res) => {
        if (res.data.result === 'true') {
          dispatch(attendParty(user_info));
        } else {
          dispatch(cancelParty(user_info));
        }
      })
      .catch((err) => {
        console.log('(attendParty) 실패 ::', err);
      });
  };
};

const deletePartyDB = (partyId = null) => {
  return function (dispatch, getState) {
    apis
      .delParty(partyId)
      .then((res) => {
        dispatch(deleteParty(partyId));
      })
      .catch((err) => {
        console.log('(delParty) 실패 ::', err);
      });
  };
};

export default handleActions(
  {
    [GET_MY_PARTY]: (state, action) =>
      produce(state, (draft) => {
        draft.myPartyList = action.payload.partyList;
      }),
    [GET_PARTY]: (state, action) =>
      produce(state, (draft) => {
        if (action.payload.partyList.currentPage === 0) {
          draft.list = action.payload.partyList;
        } else {
          draft.list.partyList.push(...action.payload.partyList.partyList);
          draft.list.currentPage = action.payload.partyList.currentPage;
        }
      }),
    [GET_ONE_PARTY]: (state, action) =>
      produce(state, (draft) => {
        // draft.partyList = action.payload.partyList.partyList;
        // draft.list = action.payload.partyList;
        draft.curtParty = action.payload.party;
      }),
    [ADD_PARTY]: (state, action) =>
      produce(state, (draft) => {
        if (draft.list) {
          draft.list.partyList.unshift(action.payload.party);
        }
      }),
    [EDIT_PARTY]: (state, action) => produce(state, (draft) => {}),
    [ATTEND_PARTY]: (state, action) =>
      produce(state, (draft) => {
        draft.curtParty.partyMember.push(action.payload.user);
        draft.curtParty.currentPeople++;
      }),
    [CANCEL_PARTY]: (state, action) =>
      produce(state, (draft) => {
        draft.curtParty.partyMember = draft.curtParty.partyMember.filter(
          (p) => p.nickname !== action.payload.user.nickname
        );
        draft.curtParty.currentPeople--;
      }),
    [DELETE_PARTY]: (state, action) =>
      produce(state, (draft) => {
        draft.list.partyList = draft.list.partyList.filter(
          (p) => p.partyId !== action.payload.partyId
        );
      }),
  },
  initialState
);

const actionCreators = {
  getPartyDB,
  getOnePartyDB,
  addPartyDB,
  editPartyDB,
  attendPartyDB,
  deletePartyDB,
  getMyPartyDB,
  getKeywordPartyDB,
};

export { actionCreators };
