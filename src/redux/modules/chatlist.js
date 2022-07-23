// import { createAction, handleActions } from 'redux-actions';
// import apis from '../../shared/api/main';
// import { produce } from 'immer';

// import __loadChatLists from './chat';

// const intialstate = {};

// const ADD_CHATITEM = 'ADD_CHATITEM';
// const EDIT_CHATITEM = 'EDIT_CHATITEM';
// const DELETE_CHATITEM = 'DELETE_CHATITEM';

// const addChatItem = createAction(ADD_CHATITEM, (list) => ({ list }));
// const editChatItem = createAction(EDIT_CHATITEM, (id) => ({ id }));
// const deleteChatItem = createAction(DELETE_CHATITEM, (id, data) => ({
//   id,
//   data,
// }));

// const addChatItemDB = (chatitem) => {
//   return function (dispatch, getState) {
//     apis
//       .addChatItem(chatitem)
//       .then((res) => {
//         console.log(chatitem);
//         dispatch(addChatItem(res.data));
//         // dispatch(chatActions.addChatRoomDB(chatitem.title, res.data.id)); // 작성할때 해당 partyId 채팅방 만들기
//       })
//       .catch((err) => {
//         console.log('(addChatItem) 실패 ::', err);
//       });
//   };
// };

// // export const addChatItemDB = () => {
// //   return async function (dispatch) {
// //     console.log('러닝');
// //     const loadData = await apis.getChatLists();
// //     console.log(loadData.data);
// //     dispatch(addChatItem(loadData.data));
// //   };
// // };

// const editChatItemDB = (id = null, chat = {}) => {
//   return function (dispatch, getState) {
//     apis
//       .editChatItem(id, chat)
//       .then((res) => {
//         dispatch(editChatItem(res.data));
//       })
//       .catch((err) => {
//         console.log('(editChatItem) 실패 ::', err);
//       });
//   };
// };

// const deleteChatItemDB = (id) => {
//   return function (dispatch, getState) {
//     apis
//       .deleteChatItem(id)
//       .then((res) => {
//         dispatch(deleteChatItem(id));
//       })
//       .catch((err) => {
//         console.log(' 실패 ::', err);
//       });
//   };
// };

// export default handleActions(
//   {
//     [ADD_CHATITEM]: (state, action) =>
//       produce(state, (draft) => {
//         console.log(draft);
//         if (draft.list) {
//           draft.list.push(action.payload.list);
//         }
//       }),
//     [EDIT_CHATITEM]: (state, action) => produce(state, (draft) => {}),
//     [DELETE_CHATITEM]: (state, action) =>
//       produce(state, (draft) => {
//         draft.list.chatList = draft.list.chatList.filter(
//           (p) => p.id !== action.payload.id
//         );
//       }),
//   },
//   intialstate
// );

// // export default function BoardReducer(state = intialstate, action) {
// //   // 새로운 액션 타입 추가시 case 추가한다.
// //   switch (action.type) {
// //     case ADD_CHATITEM: {
// //       return { ...state, list: [...state.list, action.payload] };
// //     }
// //     case DELETE_CHATITEM: {
// //       return state.filter((list) => list.id !== action.id);
// //     }
// //     default:
// //       return state;
// //   }
// // }

// const actionCreators = {
//   addChatItemDB,
//   editChatItemDB,
//   deleteChatItemDB,
// };

// export { actionCreators };
