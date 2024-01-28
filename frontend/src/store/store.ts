import { configureStore } from '@reduxjs/toolkit';
import { userRegisterApi } from '../services/userService/userService';

export const store = configureStore({
  reducer: {
    [userRegisterApi.reducerPath]: userRegisterApi.reducer,
  },

  middleware: (geDefaultMiddleware) =>
    geDefaultMiddleware().concat(userRegisterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
