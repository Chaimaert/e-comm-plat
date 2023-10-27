// rootReducer.js
import { combineReducers } from 'redux';
import someReducer from './someReducer';
import anotherReducer from './anotherReducer';

const rootReducer = combineReducers({
  someReducer,
  anotherReducer,
});

export default rootReducer;
