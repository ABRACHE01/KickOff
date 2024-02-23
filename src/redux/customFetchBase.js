import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseQuery = fetchBaseQuery({
  baseUrl: "https://api.sportmonks.com/v3/football",
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    headers.set(
      "Authorization",
      "wtypIy6AcWXuELxhZHlaJJXZ7AuHkhjqmEyUT8s8tasyKjwg94jWlXY5tuAG"
    );
    return headers;
  },
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery: BaseQuery,
  endpoints: (builder) => ({}),
});