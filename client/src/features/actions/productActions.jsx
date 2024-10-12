import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const localURL = "http://localhost:8000";

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(`${localURL}/api/v1/product`, config);

      if (data?.status == true) {
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }

      console.log("Got Products", data);

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

export const getSingleProduct = createAsyncThunk(
  "singleproduct/get",
  async (id, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `${localURL}/api/v1/product/${id}`,
        config
      );

      if (data?.status == true) {
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }

      console.log("Got Single Product", data);

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
