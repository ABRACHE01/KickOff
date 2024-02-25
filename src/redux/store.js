import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./customFetchBase";
import playerReducer from './features/Player/playerSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    playerQuery: playerReducer, 
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),
});
