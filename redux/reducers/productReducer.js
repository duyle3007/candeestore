import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    loading: false,
    productList: [],
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    addProduct: (state, action) => {
      state.productList = [...state.productList, action.payload];
    },
    removeProduct: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { startLoading, stopLoading, addProduct, removeProduct } =
  productReducer.actions;

export default productReducer.reducer;
