import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { IAuth } from "../interfaces";
import { AppState } from "../store";

const initialState: IAuth = {
  logged: false,
  user: {
    id: "",
    name: "",
    email: "",
    role: "",
  },
};

const authSlice = createSlice({
  name: "[AUTH]",
  initialState,
  reducers: {
    login: (state: IAuth) => {
      state.logged = true;
    },
    logout: (state: IAuth) => {
      state = {
        ...initialState,
      };
    },
  },
});

export { authSlice };

// Actions
export const { login, logout } = authSlice.actions;

// Selector to access to the store
export const selectAuth = (state: AppState) => state.auth;

export default authSlice.reducer;
