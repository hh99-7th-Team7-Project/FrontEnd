import apis from "../../shared/api/main"
import { getCookie } from "../../shared/Cookie";
import * as Sentry from "@sentry/react";

let intialstate = {
  list: [],
  brand_list: ["스타벅스", "빽다방", "커피빈", "이디야", "컴포즈", "드롭탑", "탐앤탐스", "더벤티", "할리스", "폴바셋", "카페베네", "엔제리너스"],
  detail_list: null,
  heart_list: null,
};
/* ----------------- 액션 타입 ------------------ */

const LOAD_COFFEE = "coffee_reducer/LOAD";
const LOAD_COFFEE_CATEGORY = "coffee_reducer/CATEGORY";
const LOAD_COFFEE_DETAIL = "coffee_reducer/DETAIL"
const LOAD_COFFEE_CATEGORY_BRAND ="coffee_reducer/CATEGORYnBRAND"
const CREATE_COFFEE = "coffee_reducer/CREATE";
const REMOVE_COFFEE = "coffee_reducer/REMOVE";


/* ----------------- 액션 생성 함수 ------------------ */
export function loadCoffee(payload) {
  return { type: LOAD_COFFEE, payload };
}
export function loadCoffeeCategory(payload) {
  return { type: LOAD_COFFEE_CATEGORY_BRAND, payload };
}
export function loadCoffeeDetail(payload) {
  return { type: LOAD_COFFEE_DETAIL, payload };
}

/* ----------------- 미들웨어 ------------------ */
export const __loadCoffee = (brand) => {
  return async function (dispatch) {
    try {
      const loadData = await apis.getCoffee(brand);
      dispatch(loadCoffee(loadData.data));
    } catch (e) {
      Sentry.captureException(e);
    }
  }

};
export const __loadCoffees = () => {
  return async function (dispatch) {
    try {
      const loadData = await apis.getCoffees();
      dispatch(loadCoffee(loadData.data));
    }
    catch (e) {
      Sentry.captureException(e);
    }
  };
};

export const __loadCoffeesnBrand = (data) => {
  return async function (dispatch) {
    try {
      const loadData = await apis.getCoffeeBrandnCate(data.brand,data.cate);
      dispatch(loadCoffee(loadData.data));
    }
    catch (e) {
      Sentry.captureException(e);
    }
  };
};

export const __loadCoffeeCategory = (category) => {
  return async function (dispatch) {
    try {
      const loadData = await apis.getCoffeeCategory(category);
      dispatch(loadCoffeeCategory(loadData.data));
    }
    catch (e) {
      Sentry.captureException(e);
    }
  };
};

export const __loadCoffeeDetail = (brand, id) => {
  return async function (dispatch) {
    const token = getCookie("token")
    if (!token) {
      try {
        const loadData = await apis.getCoffeeDetail(brand, id);
        dispatch(loadCoffeeDetail(loadData.data[0]));
      }
      catch (e) {
        Sentry.captureException(e);
      }
    } else {
      try {
        const loadData = await apis.getCoffeeDetailLogin(brand, id);
        dispatch(loadCoffeeDetail(loadData.data));
      }
      catch (e) {
        Sentry.captureException(e);
      }
    }
  };
};

export const __createCoffee = () => {
  return async function (dispatch) {
    try {
      const loadData = await apis.getCoffee();
      dispatch(loadCoffee(loadData.data));
    }
    catch (e) {
      Sentry.captureException(e);
    }
  };
};

/* ----------------- 리듀서 ------------------ */
export default function CoffeeReducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LOAD_COFFEE: {
      return { list: action.payload };
    }
    case LOAD_COFFEE_CATEGORY: {
      return { ...state, list: action.payload };
    }
    case LOAD_COFFEE_CATEGORY_BRAND: {
      return { ...state, list: action.payload };
    }
    case LOAD_COFFEE_DETAIL: {
      return { ...state, coffee: action.payload };
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