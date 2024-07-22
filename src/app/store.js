import { configureStore } from "@reduxjs/toolkit";
import proudctReducer from "../features/product/ProductSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: proudctReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
