import { createSlice } from "@reduxjs/toolkit";
import { getAllCoupons } from "../../actions/couponActions";

const initialState = {
  coupons: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  singleCoupon: {},
  message: "",
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCoupons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCoupons.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAllCoupons.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.coupons = action.payload;
      });
  },
});

export default couponSlice.reducer;
