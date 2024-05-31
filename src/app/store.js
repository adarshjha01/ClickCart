import { configureStore } from '@reduxjs/toolkit';
import proudctReducer from '../features/product/ProductSlice';

export const store = configureStore({
  reducer: {
    product: proudctReducer,
  },
});
