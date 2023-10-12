import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authSlice from "./features/authSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
