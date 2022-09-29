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
      const addedProduct = action.payload;
      const findProductExist = state.productList.find(
        (perfume) => perfume.name === addedProduct.name
      );
      if (findProductExist) {
        const addQuantityProduct = state.productList.map((perfume) => {
          if (perfume.name === addedProduct.name) {
            return {
              ...perfume,
              quantity: perfume.quantity ? perfume.quantity + 1 : 1,
            };
          }
          return perfume;
        });
        state.productList = addQuantityProduct;
      } else {
        state.productList = [
          ...state.productList,
          { ...addedProduct, quantity: 1 },
        ];
      }
    },
    updateProductList: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { startLoading, stopLoading, addProduct, updateProductList } =
  productReducer.actions;

export default productReducer.reducer;
