import apis from "../../shared/api/main"
import { getCookie } from "../../shared/Cookie";
import * as Sentry from "@sentry/react";


let intialstate = {
  list: [],
  coffee: null,
  heart_list: null,
};
/* ----------------- 액션 타입 ------------------ */

const LOAD_BOARD = "board_reducer/LOAD";
const LOAD_BOARD_DETAIL = "board_reducer/DETAIL"
const CREATE_BOARD = "board_reducer/CREATE";
const UPDATE_BOARD = "board_reducer/UPDATE";
const REMOVE_BOARD = "board_reducer/REMOVE";
// const CREATE_HEART = "COFFEE_reducer/CREATE";

/* ----------------- 액션 생성 함수 ------------------ */
export function loadBoard(payload) {
  return { type: LOAD_BOARD, payload };
}
export function loadBoardDetail(payload) {
  return { type: LOAD_BOARD_DETAIL, payload };
}
export function createBoard(payload) {
  return { type: CREATE_BOARD, payload };
}
export function updateBoard(payload) {
  return { type: UPDATE_BOARD, payload };
}
export function removeBoard(payload) {
  return { type: REMOVE_BOARD, payload };
}

/* ----------------- 미들웨어 ------------------ */
export const __loadBoard = (brand) => {
  return async function (dispatch) {
    try{const loadData = await apis.getBoard(brand);
    dispatch(loadBoard(loadData.data));}
    catch(e){
      Sentry.captureException(e);
    }
  };
};
export const __loadBoards = () => {
  return async function (dispatch) {
   try{ const loadData = await apis.getBoards();
    dispatch(loadBoard(loadData.data));}
    catch(e){
      Sentry.captureException(e);
    }
  };
};
export const __loadBoardDetail = (boardId) => {
  return async function (dispatch) {
    const token = getCookie("token")
    if(!token){
      try{ const loadData = await apis.getBoard(boardId);
    dispatch(loadBoardDetail(loadData.data));}
    catch(e){
      Sentry.captureException(e);
    }
    }else{
     try{ const loadData = await apis.getBoardLogin(boardId);
      dispatch(loadBoardDetail(loadData.data));}
      catch(e){
        Sentry.captureException(e);
      }
    }
   
  };
};
export const __createBoard = () => {
  return async function (dispatch) {
   try{ 
    const loadData = await apis.getBoard();
    dispatch(loadBoard(loadData.data));}
    catch(e){
      Sentry.captureException(e);
    }
  };
};

/* ----------------- 리듀서 ------------------ */
export default function BoardReducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LOAD_BOARD: {
      return { board: action.payload };
    }
    case LOAD_BOARD_DETAIL: {
      return { ...state, board: action.payload };
    }
    case CREATE_BOARD: {
      return { ...state, list: [...state.list, action.payload] };
    }
    case REMOVE_BOARD: {
      return state.filter((list) => list.id !== action.id);
    }
    default:
      return state;
  }
}