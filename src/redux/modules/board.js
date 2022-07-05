import apis from "../../shared/api/main"


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
    const loadData = await apis.getBoard(brand);
    console.log(loadData.data);
    dispatch(loadBoard(loadData.data));
  };
};
export const __loadBoards = () => {
  return async function (dispatch) {
    const loadData = await apis.getBoards();
    console.log(loadData.data);
    dispatch(loadBoard(loadData.data));
  };
};
export const __loadBoardDetail = (brand,id) => {
  return async function (dispatch) {
    const loadData = await apis.getBoardDetail(brand,id);
    console.log(loadData.data);
    dispatch(loadBoardDetail(loadData.data));
  };
};
export const __createBoard = () => {
  return async function (dispatch) {
    console.log("러닝")
    const loadData = await apis.getBoard();
    console.log(loadData.data);
    dispatch(loadBoard(loadData.data));
  };
};

/* ----------------- 리듀서 ------------------ */
export default function BoardReducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LOAD_BOARD: {
      return { list: action.payload };
    }
    case LOAD_BOARD_DETAIL: {
      return { ...state, coffee: action.payload };
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