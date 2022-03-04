import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import userReducer from './auth/userReuder';

export default combineReducers({
  theme: themeReducer,
  auth: userReducer,
});
