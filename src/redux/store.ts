import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './state/cart';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

const myStore = configureStore({
  reducer: persistedReducer,
});

export default myStore;
