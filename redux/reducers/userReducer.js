import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userData: null,
    token: null,
  },
  reducers: {
    updateAccessToken: (state, action) => {
      state.token = action.payload;
    },
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state, action) => {
      state.userData = null;
      state.token = null;
    },
  },
});

export const { updateAccessToken, updateUserData, logout } =
  userReducer.actions;

export default userReducer.reducer;
