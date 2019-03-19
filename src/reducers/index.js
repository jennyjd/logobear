import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jogsReducer from './jogsReducer';

export default combineReducers({
  user: authReducer,
  jogs: jogsReducer,
});
