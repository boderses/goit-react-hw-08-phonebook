import { createAsyncThunk } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../../api/auth';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      await register(data);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue }) => {
    try {
      await logIn(data);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await logOut();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return rejectWithValue('Unable to fetch user');
      }
      await refreshUser(persistedToken);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
