import { configureStore } from '@reduxjs/toolkit';
import { userRegisterApi } from './services/userService/userService';
import toastReducer from './slices/toastSlice/toastSlice';
import { rtkQueryErrorLogger } from './middlewares/errorLogger';

export const store = configureStore({
  reducer: {
    [userRegisterApi.reducerPath]: userRegisterApi.reducer,
    toast: toastReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userRegisterApi.middleware)
      .concat(rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
