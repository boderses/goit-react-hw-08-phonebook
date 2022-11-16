import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  logInThunk,
  logOutThunk,
  refreshUserThunk,
} from './thunks';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        const { name, email } = action.payload.user;
        state.name = name;
        state.email = email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        const { name, email } = action.payload.user;
        state.name = name;
        state.email = email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        const { name, email } = action.payload;
        state.name = name;
        state.email = email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
