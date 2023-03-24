import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CardInfo {
  name: string;
  id: number;
  price: number;
}
interface CartItem extends CardInfo {
  amount: number;
}

const cartReducer = createSlice({
  name: 'cart',
  initialState: <CartItem[]>[],
  reducers: {
    addToCart(state, action: PayloadAction<CardInfo>) {
      let indexCartItem = -1;
      if ((indexCartItem = state.findIndex((elem) => elem.id == action.payload.id)) === -1) {
        state.push({
          ...action.payload,
          amount: 1,
        });
        console.log(indexCartItem);
      } else {
        state[indexCartItem].amount++;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      let indexCartItem = state.findIndex((elem) => elem.name == action.payload);
      let cartItem = state[indexCartItem];
      if (cartItem.amount === 1) {
        console.log('state slice');
        state = state.splice(indexCartItem, 1);
      } else {
        console.log('here', state[indexCartItem].amount);
        state[indexCartItem].amount--;
      }
    },
  },
});

export const {reducer: cart} = cartReducer;
export const {addToCart, removeFromCart} = cartReducer.actions;
