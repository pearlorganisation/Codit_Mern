import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const localURL = "http://localhost:4000";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { firstName, lastName, email, phoneNumber, password },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${localURL}/api/v1/auth/signup`,
        { firstName, lastName, email, password, phoneNumber },
        config
      );

      //   if (data.message) {
      //     console.log("Message", data.message);
      //   }

      console.log("Register Data", data);
    } catch (error) {
      console.log("Error 123", error);
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${localURL}/api/v1/auth/login`,
        { email, password },
        config
      );

      console.log("Login Data", data);

      localStorage.setItem("isLoggedIn", true);

      return data;
    } catch (error) {
      console.log("Error", error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
