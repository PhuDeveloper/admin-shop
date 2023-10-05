import { createSlice } from '@reduxjs/toolkit';
import { InitUserState } from './type';

const initialState: InitUserState = {
  role: 2,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // updateRoleUser: (state, actions: PayloadAction<>) => {
    //   state.role = actions.payload;
    // },
  },
});

const { reducer: userReduce } = userSlice;

export default userReduce;
