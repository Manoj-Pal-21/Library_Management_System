import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    signupSuccess(state) {
      state.error = null;
    },
    signupFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const { signupSuccess, signupFailure } = signupSlice.actions;

export default signupSlice.reducer;
