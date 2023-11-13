import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './Reducers/productReducers';
import { userLoginReducer } from './Reducers/userReducers';
import { userRegisterReducer } from './Reducers/userReducers';

const reducer = combineReducers({
  productList: productListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});


const middleware = [thunk];

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
  userLogin:{userInfo:userInfoFromLocalStorage}
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
