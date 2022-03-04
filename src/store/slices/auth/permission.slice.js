import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth/permission',
  initialState: 'member',
  reducers: {
    setAdmin(state, action) {
      return action.payload;
    },
    setMember(state, action) {
      return slice.getInititalState();
    },
  },
  // extraReducers: builder => {
  //   builder.addCase();
  //   builder.addMatcher();
  //   builder.addDefaultCase();
  // }
});

export default slice.reducer;

export const { setAdmin, setMember } = slice.actions;
