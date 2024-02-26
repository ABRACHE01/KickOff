import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMatches: [],
};

const matchSlice = createSlice({
  name: "favoriteMatches",
  initialState,
  reducers: {
    toggleFavoriteMatch: (state, action) => {
      const favMatch = action.payload;
      const matchIndex = state.favoriteMatches.findIndex(
        (match) => match.id === favMatch.id
      );
      if (matchIndex === -1) {
        state.favoriteMatches.push(favMatch );
      } else {
        state.favoriteMatches.splice(matchIndex, 1);
      }
    },
  },
});

export const { toggleFavoriteMatch } = matchSlice.actions;

export default matchSlice.reducer;
