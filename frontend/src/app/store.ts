import { configureStore } from '@reduxjs/toolkit';
import { userRegisterApi } from '../features/users/userService';
import { authApi } from '../features/auth/authService';
import userReducer from '../features/users/userSlice';
import toastReducer from '../features/toast/toastSlice';

export const store = configureStore({
  reducer: {
    [userRegisterApi.reducerPath]: userRegisterApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
    toast: toastReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userRegisterApi.middleware)
      .concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
