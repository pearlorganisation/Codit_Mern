import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getSingleProduct } from "../../actions/productActions";

const initialState = {
  products: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  singleProduct: {},
  message: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      });
  },
});

export default productSlice.reducer;
