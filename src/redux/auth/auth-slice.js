import { createSlice } from '@reduxjs/toolkit';
import {
  createUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from './auth-operation';

export const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [createUser.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [createUser.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload.message,
    }),
    [createUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      token: payload.token,
      isLogin: true,
      user: payload.user,
    }),

    [loginUser.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [loginUser.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload.message,
    }),
    [loginUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      token: payload.token,
      isLogin: true,
      user: payload.user,
    }),

    [logoutUser.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [logoutUser.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload.message,
    }),
    [logoutUser.fulfilled]: () => initialState,

    [getCurrentUser.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [getCurrentUser.rejected]: () => initialState,
    [getCurrentUser.fulfilled]: (store, { payload }) => {
      if (payload.token) {
        return {
          ...store,
          loading: false,
          isLogin: true,
          user: payload.user,
          token: payload.token,
        };
      }
      return {
        ...store,
        loading: false,
        isLogin: true,
        user: payload,
      };
    },
  },
});

export default authSlice.reducer;
