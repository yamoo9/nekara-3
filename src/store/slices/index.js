import { combineReducers } from 'redux';
import authReducer from './auth';

export default combineReducers({
  auth: authReducer,
  // theme: themeReducer,
  // cart: cartReducer,
  // comments: commmentsReducer,
});
