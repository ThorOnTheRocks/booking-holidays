import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import type { AuthResponse, LoginRequest } from '../../types/global';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}` }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        credentials: 'include',
        body: credentials,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
