// This is traditionally way to write redux
// Because createStore have been deprecated, redux official page have recommended to use Redux-toolkit for quick and easy way
// Therefore I will use redux-toolkit to apply redux

import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import rootReducer from "redux/reducers/index";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
