import { createSlice } from '@reduxjs/toolkit';

/* -------------------------------------------------------------------------- */

const slice = createSlice({
  name: 'auth/user',
  initialState: null,
  reducers: {
    login(state, action) {
      state = action.payload;
      return state;
    },
    logout(state, action) {
      return slice.getInitialState();
    },
  },
});

export default slice.reducer;
export const { login, logout } = slice.actions;
