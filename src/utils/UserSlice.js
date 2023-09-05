/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  user: false,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

// set action get user info
export const getUserInfo = createAsyncThunk("user/info", async (thunkAPI) => {
  try {
    const response = await axios.get(
      `https://sosial-app-server-api.vercel.app/user`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

// create user slice
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: { reset: (state) => initialState },
  extraReducers: (builder) => {
    // user builder
    builder.addCase(getUserInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
