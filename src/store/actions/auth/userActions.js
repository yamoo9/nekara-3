import { LOGIN, LOGOUT } from '../types';

export const loginUser = (currentUser) => ({
  type: LOGIN,
  payload: currentUser,
});

export const logoutUser = () => ({
  type: LOGOUT,
});
