import { configureStore } from "@reduxjs/toolkit";
import { CardSlice } from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CardSlice.reducer,
  },
});
