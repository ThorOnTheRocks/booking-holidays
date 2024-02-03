import {
  isRejectedWithValue,
  MiddlewareAPI,
  Middleware,
  SerializedError,
} from '@reduxjs/toolkit';
import { setToast } from '../slices/toastSlice/toastSlice';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface ApiErrorResponse {
  message: string;
}

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      let errorMsg = 'An unknown error occurred';

      if ((action.error as FetchBaseQueryError).status) {
        const fetchBaseQueryError =
          action.error as FetchBaseQueryError;
        const errorData =
          fetchBaseQueryError.data as ApiErrorResponse;
        errorMsg =
          errorData?.message || 'An error occurred on the server';
      } else if ((action.error as SerializedError).message) {
        errorMsg =
          (action.error as SerializedError).message ||
          'An unknown error occurred';
      }

      api.dispatch(setToast({ message: errorMsg, status: 'ERROR' }));
    }

    return next(action);
  };
