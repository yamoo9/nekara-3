import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth/user',
  initialState: null,
  reducers: {
    userLogin(state, action) {
      state = action.payload;
      return state;
    },
    userLogout(state) {
      return null;
    },
  },
});

export default slice.reducer;

export const { userLogin, userLogout } = slice.actions;
