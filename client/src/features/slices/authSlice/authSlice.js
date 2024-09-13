import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "../../actions/authActions";

registerUser;

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
  message: null,
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
        })
        .addCase(userLogin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.message = action.payload;
        }),
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          (state.loading = false),
            (state.success = true),
            (state.userInfo = action.payload);
        })
        .addCase(userLogin.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.message = action.payload;
        });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
