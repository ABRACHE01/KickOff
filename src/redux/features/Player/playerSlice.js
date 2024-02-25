import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    playerQuery: "",
  };
  

const playerSlice = createSlice({
  name: "playerQuery",
  initialState,
  reducers: {
    setPlayerQuery: (state, action) => {
      state.playerQuery = action.payload;
    },
  },
});

export const { setPlayerQuery } = playerSlice.actions;

export default playerSlice.reducer;
