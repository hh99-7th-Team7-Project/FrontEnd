import apis from "../../shared/api/main"


let intialstate = {
  list: [],
  detail_list: null,

  heart_list: null,
};
/* ----------------- 액션 타입 ------------------ */

const LOAD_COFFEE = "coffee_reducer/LOAD";
const LOAD_COFFEE_DETAIL = "coffee_reducer/DETAIL"
const CREATE_COFFEE = "coffee_reducer/CREATE";
const UPDATE_COFFEE = "coffee_reducer/UPDATE";
const REMOVE_COFFEE = "coffee_reducer/REMOVE";
// const CREATE_HEART = "COFFEE_reducer/CREATE";

/* ----------------- 액션 생성 함수 ------------------ */
export function loadCoffee(payload) {
  return { type: LOAD_COFFEE, payload };
}
export function loadCoffeeDetail(payload) {
  return { type: LOAD_COFFEE_DETAIL, payload };
}
export function createCoffee(payload) {
  return { type: CREATE_COFFEE, payload };
}
export function updateCoffee(payload) {
  return { type: UPDATE_COFFEE, payload };
}
export function removeCoffee(payload) {
  return { type: REMOVE_COFFEE, payload };
}

/* ----------------- 미들웨어 ------------------ */
export const __loadCoffee = () => {
  return async function (dispatch) {
    const loadData = await apis.getCoffee();
    console.log(loadData.data);
    dispatch(loadCoffee(loadData.data));
  };
};
export const __loadCoffeeDetail = (brand,id) => {
  return async function (dispatch) {
    const loadData = await apis.getCoffeeDetail(brand,id);
    console.log(loadData.data);
    dispatch(loadCoffeeDetail(loadData.data));
  };
};
export const __createCoffee = () => {
  return async function (dispatch) {
    console.log("러닝")
    const loadData = await apis.getCoffee();
    console.log(loadData.data);
    dispatch(loadCoffee(loadData.data));
  };
};

/* ----------------- 리듀서 ------------------ */
export default function CoffeeReducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LOAD_COFFEE: {
      return { list: action.payload };
    }
    case LOAD_COFFEE_DETAIL: {
      return { list: action.payload };
    }
    case CREATE_COFFEE: {
      return { ...state, list: [...state.list, action.payload] };
    }
    case REMOVE_COFFEE: {
      return state.filter((list) => list.id !== action.id);
    }
    default:
      return state;
  }
}