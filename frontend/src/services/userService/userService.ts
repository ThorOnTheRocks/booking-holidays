import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import type { User, AuthResponse } from '../../types/global';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const userRegisterApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}` }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<AuthResponse, User>({
      query: (data) => ({
        url: 'users/register',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userRegisterApi;
