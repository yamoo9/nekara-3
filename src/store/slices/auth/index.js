import { combineReducers } from 'redux';
import userReducer from './user.slice';
import permissionReducer from './permission.slice';

export default combineReducers({
  user: userReducer,
  permission: permissionReducer,
});
