import {configureStore, createListenerMiddleware, isAnyOf} from '@reduxjs/toolkit';
import {cart} from './reducers/cart';
import logger from 'redux-logger';
import {addToCart, removeFromCart} from '../store/reducers/cart';

const cartlistenerMiddleware = createListenerMiddleware();
cartlistenerMiddleware.startListening({
  matcher: isAnyOf(addToCart, removeFromCart),
  effect: async (_, listenerApi) => {
    let state = listenerApi.getState();
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem('persistantState', serialisedState);
    } catch (e) {
      console.warn(e);
    }
  },
});

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const store = configureStore({
  preloadedState: loadFromLocalStorage(),
  reducer: {
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(cartlistenerMiddleware.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
