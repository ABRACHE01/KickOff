
import {apiSlice} from '../../customFetchBase'

export const playerApiSlice = apiSlice.injectEndpoints({

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

      searchPlayers: builder.query({
        query: (searchQuery) => ({
          url: `/players/search/${searchQuery}`,
          method: "GET"
        }),
      }),
    }),
  });
  
  export const { 
    usePlayersQuery,
    useSearchPlayersQuery,
    usePlayerDetailsQuery
   } = playerApiSlice;