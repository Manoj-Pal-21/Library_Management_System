
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.isAdmin = action.payload.isAdmin;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = loginSlice.actions;

export default loginSlice.reducer;
