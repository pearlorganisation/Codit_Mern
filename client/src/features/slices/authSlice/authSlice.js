import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "../../actions/authActions";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
  message: null,
  isSuccess: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("isLoggedIn");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder
        .addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.isSuccess = false;
          state.isError = true;
        })
        .addCase(userLogin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.message = action.payload;
          state.isSuccess = false;
          state.isError = true;
        }),
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          (state.loading = false),
            (state.success = true),
            (state.userInfo = action.payload);
          state.isSuccess = true;
        })
        .addCase(userLogin.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.isSuccess = true;
          state.message = action.payload;
        });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
