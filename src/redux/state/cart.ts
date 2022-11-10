import { createSlice } from '@reduxjs/toolkit';

export interface ItemProps {
  cart: {
    id: string;
    grid_picture_url: string;
    brand_name: string;
    nickname: string;
    size: string;
    retail_price_cents: number | null;
  }[];
  itemsCounter: number;
  totalPrice: number;
}

const initialCart: ItemProps = {
  cart: [],
  itemsCounter: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    addItemToCart: (state, actions) => {
      let cartItem = {
        id: actions.payload.id,
        grid_picture_url: actions.payload.grid_picture_url,
        brand_name: actions.payload.brand_name,
        nickname: actions.payload.nickname,
        size: actions.payload.size,
        retail_price_cents: actions.payload.retail_price_cents,
      };
      state.cart.push(cartItem);
    },
    removeItemFormCart: (state, actions) => {
      const test = state.cart.findIndex((item) => item.id === actions.payload.id);
      console.log(test);

      state.cart.pop();
      console.log(actions.payload.id);
      state.itemsCounter--;
    },
    itemsCartCounter: (state) => {
      state.itemsCounter++;
    },
    totalPriceCartIncrement: (state, actions) => {
      state.totalPrice += actions.payload.price;
    },
    totalPriceCartDecrement: (state, actions) => {
      state.totalPrice -= actions.payload.price;
    },
  },
});

export const { addItemToCart, removeItemFormCart, itemsCartCounter, totalPriceCartIncrement, totalPriceCartDecrement } = cartSlice.actions;