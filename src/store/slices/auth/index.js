import { combineReducers } from 'redux';
import userReducer from './user';
import permissionReducer from './permission';

export default combineReducers({
  user: userReducer,
  permission: permissionReducer,
});
