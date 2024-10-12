import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

const localURL = "http://localhost:8000";

export const getAllCoupons = createAsyncThunk(
  "coupon/get",
  async (thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(`${localURL}/api/v1/coupon`, config);

      return data?.data;
    } catch (error) {
      console.log("Error 123", error);
      if (error?.response && error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
        return thunkAPI.rejectWithValue(error?.response?.data?.message);
      } else {
        toast.error(error?.message);
        return thunkAPI.rejectWithValue(error?.message);
      }
    }
  }
);
