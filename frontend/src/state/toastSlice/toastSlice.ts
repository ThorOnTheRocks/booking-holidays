import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToastTypes } from '../../components/Toast/Toast.types';

const initialState: ToastTypes = {
  message: '',
  status: '',
  isOpen: false,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (
      state,
      action: PayloadAction<{
        message: string;
        status: 'SUCCESS' | 'ERROR';
      }>
    ) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.isOpen = true;
    },
    clearToast: (state) => {
      state.isOpen = false;
      state.message = '';
      state.status = '';
    },
  },
});

export const { setToast, clearToast } = toastSlice.actions;

export default toastSlice.reducer;
