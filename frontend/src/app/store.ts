import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';
import userReducer from '../features/users/userSlice';
import toastReducer from '../features/toast/toastSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
    toast: toastReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
