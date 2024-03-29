import { apiSlice } from '../../customFetchBase';

export const matcheApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    matches: builder.query({
      query: () => ({
        url: "/fixtures?include=participants",
        method: "GET"
      }),
    }),
    matchDetails: builder.query({
      query: (id) => ({
        url: `/fixtures/${id}?include=participants`,
        method: "GET"
      }),
    }),
  }),
});

export const { 
  useMatchesQuery,
  useMatchDetailsQuery,
} = matcheApiSlice;
