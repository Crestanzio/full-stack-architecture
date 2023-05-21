import { createSlice } from "@reduxjs/toolkit";
import { singUpRequest } from "../../requests/signup";

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  isAuthenticated: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.success = action.payload.success;
      state.error = action.payload.error;
    },
    login: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.success = action.payload.success;
      state.error = action.payload.error;
    },
    logout: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: {
    [singUpRequest.pending]: (state, action) => {
      state.isLoading = true;
    },
    [singUpRequest.fulfilled]: (state, action) => {
      state.username = action.payload.user.username;
      state.password = action.payload.user.password;
      console.log(action);
    },
    [singUpRequest.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export const { signUp, login, logout } = userSlice.actions;

export default userSlice.reducer;
