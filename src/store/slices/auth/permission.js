import { createAction, createReducer } from '@reduxjs/toolkit';

export const permissionAdmin = createAction('permission/administrator');
export const permissionMember = createAction('permission/member');

// inital state
const initialState = 'member';

// reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(permissionAdmin, (state, action) => {
    return 'administrator';
  });
  builder.addCase(permissionMember, (state, action) => {
    return initialState;
  });
});
