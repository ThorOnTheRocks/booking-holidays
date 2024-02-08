import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { UserBaseInfo } from '../../types/global';

type UserState = {
  userInfo: UserBaseInfo | null;
  isLoggedIn: boolean;
};

const initialState: UserState = {
  userInfo: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserBaseInfo>) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
