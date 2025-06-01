import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,

};

const dataSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchingProducts: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchedProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchingProducts, fetchedProducts, fetchProductsError, } = dataSlice.actions;
export default dataSlice.reducer;