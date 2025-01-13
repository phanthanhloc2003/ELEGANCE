import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../hooks/axiosBaseQuery";
import { User, UserLogin, UserResponse } from "../../types/userType";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    registers: builder.mutation<User, UserLogin>({
      query: (credentials) => ({
        url: "/user",
        method: "POST",
        data: credentials,
      }),
    }),
    login: builder.mutation<UserResponse, UserLogin>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
      }),
    }),
  }),
});

export const { useRegistersMutation, useLoginMutation } = authApi;
