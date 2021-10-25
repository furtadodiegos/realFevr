import { createApi } from "@reduxjs/toolkit/query/react";

import type { User } from "./slice";

import { axiosBaseQuery } from "./axios";

const usersApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "usersApi",
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => ({
        url: "/users",
        method: "get",
      }),
    }),
  }),
});

export const { useLazyGetUsersQuery } = usersApi;

export default usersApi;
