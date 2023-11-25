import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartInitInterface, CartItemInterface, UpdateQuantityCart } from './type';

const initialState: CartInitInterface = {
  listCart: [],
};

export const cartSlice = createSlice({
  name: 'cart',

  initialState,
  reducers: {
    createInitCart: (state, action: PayloadAction<CartItemInterface[]>) => {
      state.listCart = action.payload;
    },

    updateQuantityItemCart: (state, action: PayloadAction<UpdateQuantityCart>) => {
      state.listCart[action.payload.index] = action.payload.data;
    },
    removeCartItem: (state, action: PayloadAction<any>) => {},
  },
});

export const { createInitCart, updateQuantityItemCart } = cartSlice.actions;

export default cartSlice.reducer;
