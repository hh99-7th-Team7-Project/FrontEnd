import { createStore,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './modules';
import userReducer from './modules/users'
import commentReducer from './modules/comment'
import coffeeReducer from "./modules/coffee";


const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
const rootReducer = combineReducers({ 
  user: userReducer,
  comment: commentReducer,
  coffee: coffeeReducer
 });

 
// 스토어를 만듭니다.
const store = createStore(rootReducer, enhancer );

export default store;