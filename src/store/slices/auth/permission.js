import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth/permission',
  initialState: '',
  reducers: {
    setPermission(state, action) {
      state = action.payload;
      return state;
    },
    resetPermission(state) {
      return '';
    },
  },
});

export default slice.reducer;

export const { setPermission, resetPermission } = slice.actions;
