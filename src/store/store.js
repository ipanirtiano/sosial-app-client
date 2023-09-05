import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../utils/AuthSlice";
import userReducer from "../utils/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
