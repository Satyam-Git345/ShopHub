import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../api/api";

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  loginLoading: false,
  loginError: "",
  registerLoading: false,
  registerError: "",
  logoutLoading: false,
  logoutError: "",
  logoutAllLoading: false,
  logoutAllError: "",
};

export const LoginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", userData);
      const data = response.data;
      if (data.error) {
        return rejectWithValue(data.error);
      }
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || err.message || "Network error occurred"
      );
    }
  }
);

export const LogoutAllDevicesApi = createAsyncThunk(
  "user/logoutAllDevicesUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.post("/logout-all-devices");
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error ||
          err.message ||
          "Logout from all devices failed"
      );
    }
  }
);

export const RegisterApi = createAsyncThunk(
  "user/RegisterUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post("/register", user);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || err.message || "Error While Register"
      );
    }
  }
);

export const LogoutUserApi = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.post("/logout");
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || err.message || "Logout failed"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.loginError = "";
      state.registerError = "";
      state.logoutError = "";
      state.logoutAllError = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loginLoading = true;
        state.loginError = "";
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.loginLoading = false;
        state.loginError = "";
        toast.success("User Login Successfully!");
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loginLoading = false;
        state.isAuthenticated = false;
        state.currentUser = null;
        state.loginError = action.payload || "Something Went Wrong";
        toast.error(action.payload || "Login failed");
      })
      .addCase(LogoutUserApi.pending, (state) => {
        state.logoutLoading = true;
        state.logoutError = "";
      })
      .addCase(LogoutUserApi.fulfilled, (state) => {
        state.logoutLoading = false;
        state.currentUser = null;
        state.isAuthenticated = false;
        state.logoutError = "";
        toast.success("Logged out successfully");
      })
      .addCase(LogoutUserApi.rejected, (state, action) => {
        state.logoutLoading = false;
        state.logoutError = action.payload || "Logout failed";
        toast.error(action.payload || "Logout failed");
        // Optionally clear state anyway even if API fails
        state.currentUser = null;
        state.isAuthenticated = false;
      })
      .addCase(LogoutAllDevicesApi.pending, (state) => {
        state.logoutAllLoading = true;
        state.logoutAllError = "";
      })
      .addCase(LogoutAllDevicesApi.fulfilled, (state) => {
        state.logoutAllLoading = false;
        state.currentUser = null;
        state.isAuthenticated = false;
        state.logoutAllError = "";
        toast.success("Logged out from all devices successfully");
      })
      .addCase(LogoutAllDevicesApi.rejected, (state, action) => {
        state.logoutAllLoading = false;
        state.logoutAllError =
          action.payload || "Logout from all devices failed";
        toast.error(action.payload || "Logout from all devices failed");
        state.currentUser = null;
        state.isAuthenticated = false;
      })
      .addCase(RegisterApi.pending, (state) => {
        state.registerLoading = true;
        state.registerError = "";
      })
      .addCase(RegisterApi.fulfilled, (state) => {
        state.registerLoading = false;
        state.registerError = "";
        toast.success(
          "User Registred successfully you can proceed with login now!"
        );
      })
      .addCase(RegisterApi.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerError = action.payload || "Register failed";
        toast.error(action.payload || "Register failed");
      });
  },
});

export const getUserDetails = (s) =>
  s?.user?.currentUser?.user || s?.user?.currentUser;
export const getIsAuthenticated = (s) => s?.user?.isAuthenticated;

export const getLoginLoading = (s) => s?.user?.loginLoading;
export const getLoginError = (s) => s?.user?.loginError;

export const getRegisterLoading = (s) => s?.user?.registerLoading;
export const getRegisterError = (s) => s?.user?.registerError;

export const getLogoutLoading = (s) => s?.user?.logoutLoading;
export const getLogoutError = (s) => s?.user?.logoutError;

export const getLogoutAllLoading = (s) => s?.user?.logoutAllLoading;
export const getLogoutAllError = (s) => s?.user?.logoutAllError;

// Backwards compatibility/General loading aggregate
export const getUserLoading = (s) =>
  s?.user?.loginLoading ||
  s?.user?.registerLoading ||
  s?.user?.logoutLoading ||
  s?.user?.logoutAllLoading;

export const getUserError = (s) =>
  s?.user?.loginError ||
  s?.user?.registerError ||
  s?.user?.logoutError ||
  s?.user?.logoutAllError;

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
