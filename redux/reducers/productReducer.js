import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    loading: false,
    productList: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.productList = [...state.productList, action.payload];
    },
    removeProduct: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { addProduct, removeProduct } = productReducer.actions;

export default productReducer.reducer;
