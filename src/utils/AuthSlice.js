/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  token: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  messageSuccess: "",
};

// set action login
export const login = createAsyncThunk(
  "user/login",
  async (inputs, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://sosial-app-server-api.vercel.app/login",
        {
          email: inputs.email,
          password: inputs.password,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// set action login
export const register = createAsyncThunk(
  "user/register",
  async (inputs, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://sosial-app-server-api.vercel.app/register",
        {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
          confirmPassword: inputs.confirmPassword,
        }
      );
      return response.data.msg;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// set action login
export const logout = createAsyncThunk(
  "user/logout",
  async (inputs, thunkAPI) => {
    try {
      await axios.delete("https://sosial-app-server-api.vercel.app/logout");
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// create user slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: { reset: (state) => initialState },
  extraReducers: (builder) => {
    // user builder
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.token = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isError = true;
      state.message = action.payload;
    });

    // register builder
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageSuccess = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
