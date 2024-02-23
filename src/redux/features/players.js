
import {apiSlice} from '../customFetchBase'

export const playerSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
      players: builder.query({
        query: () => ({
          url: "/players",
          method:"GET"
        }),
      }),

      playerDetails: builder.query({
        query: (id) => ({
          url: `/players/${id}`,
          method: "GET"
        }),
      }),
      
    }),
  });
  
  export const { 
    usePlayersQuery,
    usePlayerDetailsQuery
   } = playerSlice;