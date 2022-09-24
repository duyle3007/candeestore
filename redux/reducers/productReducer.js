import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    loading: false,
    productList: [],
  },
  reducers: {
    addProduct: (state, action) => {
      console.log("action", action);
      state.productList = [...state.productList, action.payload];
    },
  },
});

export const { addProduct } = productReducer.actions;

export default productReducer.reducer;
