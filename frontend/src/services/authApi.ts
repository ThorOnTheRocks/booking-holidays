import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import type {
  LoginRequest,
  AuthResponse,
  ValidateTokenResponse,
  UserRegistration,
} from '../types/global';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Auth', 'User'],
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        credentials: 'include',
        body: credentials,
      }),
    }),
    validateToken: builder.query<ValidateTokenResponse, void>({
      query: () => ({
        url: 'auth/validate-token',
        method: 'GET',
      }),
      providesTags: ['Auth'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['Auth'],
    }),
    registerUser: builder.mutation<void, UserRegistration>({
      query: (user) => ({
        url: 'users/register',
        method: 'POST',
        credentials: 'include',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useLoginMutation,
  useValidateTokenQuery,
  useLogoutMutation,
  useRegisterUserMutation,
} = authApi;
