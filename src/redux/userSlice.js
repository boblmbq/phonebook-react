import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  logout,
  register,
  getUserByPersistedToken,
} from './userOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogedIn: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogedIn: true,
      };
    },
    [login.fulfilled]: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogedIn: true,
      };
    },
    [logout.fulfilled]: state => {
      return {
        ...state,
        user: { name: null, email: null },
        token: null,
        isLogedIn: false,
      };
    },
    [getUserByPersistedToken.fulfilled]: (state, action) => {
      return {
        ...state,
        user: action.payload,
        isLogedIn: true,
      };
    },
  },
});

export const userReducer = userSlice.reducer;
