import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./customFetchBase";
import playerReducer from './features/Player/playerSlice';
import matchReducer from './features/match/matchSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    playerQuery: playerReducer, 
    FavoritMatches: matchReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),
});
