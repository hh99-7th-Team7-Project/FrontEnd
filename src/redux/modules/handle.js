import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import apis from '../../shared/api/main';

const IS_PAGENAME = 'IS_PAGENAME';
const SELECT_MARKER = 'SELECT_MARKER';
const SELECT_TIME = 'SELECT_TIME';
const FEED_LIKE = 'FEED_LIKE';
const PARTY_BEFORE = 'PARTY_BEFORE';

const isPagename = createAction(IS_PAGENAME, (pagename) => ({ pagename }));
const selectMarker = createAction(SELECT_MARKER, (selectData) => ({
  selectData,
}));
const selectTime = createAction(SELECT_TIME, (selectTime) => ({ selectTime }));
const feedLike = createAction(FEED_LIKE, (feed) => ({ feed }));
const partyBefore = createAction(PARTY_BEFORE, (party) => ({ party }));

const initialState = {
  selectTime: {
    division: '오전',
    hour: '1',
    minute: '00',
  },
};

const selectMarkerDB = (id, idx = null) => {
  return function (dispatch, getState) {
    const selectData = {
      id: id,
      index: idx,
    };
    dispatch(selectMarker(selectData));
  };
};

const selectTimeDB = (time = null, type) => {
  return function (dispatch, getState) {
    let selectData = getState().handle.selectTime;

    if (type === 'division') {
      selectData = {
        ...selectData,
        division: time,
      };
    } else if (type === 'hour') {
      selectData = {
        ...selectData,
        hour: time,
      };
    } else {
      selectData = {
        ...selectData,
        minute: time,
      };
    }
    dispatch(selectTime(selectData));
  };
};

export const __chatItemBeforeDB = (id) => {
  return function (dispatch, getState) {
    dispatch(partyBefore(party));
  };
};

const myfeedLikeDB = (feedId) => {
  return function (dispatch, getState) {
    apis
      .feedLike(feedId)
      .then((res) => {
        dispatch(
          feedLike({
            goodStatus: res.data.goodStatus,
            goodCnt: res.data.goodCnt,
            feedId,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [IS_PAGENAME]: (state, action) =>
      produce(state, (draft) => {
        draft.isPagename = action.payload.pagename;
      }),
    [SELECT_MARKER]: (state, action) =>
      produce(state, (draft) => {
        draft.selectMarker = action.payload.selectData;
      }),
    [SELECT_TIME]: (state, action) =>
      produce(state, (draft) => {
        draft.selectTime = action.payload.selectTime;
      }),
    [PARTY_BEFORE]: (state, action) =>
      produce(state, (draft) => {
        draft.partyBefore = action.payload.party;
      }),
    [FEED_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.myfeedLike = action.payload.feed;
      }),
  },
  initialState
);

const actionCreators = {
  isPagename,
  selectMarkerDB,
  selectTimeDB,
  myfeedLikeDB,
  partyBeforeDB,
};

export { actionCreators };
