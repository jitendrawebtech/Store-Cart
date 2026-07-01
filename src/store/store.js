import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productSlice";


export const store = configureStore({
  reducer: {
    products: productsReducer
  }
})