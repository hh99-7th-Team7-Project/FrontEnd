import { createStore,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './modules';
import user from './modules/users'
import commentpost from './modules/commentpost'


const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
const rootReducer = combineReducers({ 
  user,
  commentpost
 });

 
// 스토어를 만듭니다.
const store = createStore(rootReducer, enhancer );

export default store;