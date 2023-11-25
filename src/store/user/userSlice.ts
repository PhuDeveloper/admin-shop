import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitUserState, PayloadUpdateRole } from './type';

const initialState: InitUserState = {
  role: 2,
};

export const userSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {
    updateRoleUser: (state, actions: PayloadAction<PayloadUpdateRole>) => {
      state.role = actions.payload.role;
    },
  },
});

export const { updateRoleUser } = userSlice.actions;

export default userSlice.reducer;
