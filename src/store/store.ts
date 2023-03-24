import {configureStore} from '@reduxjs/toolkit';
import {cart} from './reducers/cart';
import logger from 'redux-logger';
export const store = configureStore({
  reducer: {
    cart,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
