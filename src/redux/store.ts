import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './state/cart';

const myStore = configureStore({
  reducer: cartSlice.reducer,
});

export default myStore;
