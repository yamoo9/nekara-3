import { createAction, createReducer } from '@reduxjs/toolkit';

/* -------------------------------------------------------------------------- */

export const authLogin = createAction('auth/login');
export const authLogout = createAction('auth/logout');

// inital state
const initialState = null;

// reducer
export default createReducer(initialState, {
  [authLogin]: (state, action) => {
    state = action.payload;
    return state;
  },
  [authLogout]: () => {
    return initialState;
  },
});
