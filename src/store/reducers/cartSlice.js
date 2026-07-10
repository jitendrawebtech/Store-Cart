import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(sessionStorage.getItem("cartItems")) || []
  },
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(product => product.id === item.id);

      if (existItem) {
        state.cartItems = state.cartItems.map(product =>
          product.id === existItem.id ?
            { ...product, quantity: product.quantity + item.quantity }
            : product)
      }
      else {
        state.cartItems.push(
          { ...item, quantity: item.quantity || 1 }
        )
      }
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(product => product.id !== action.payload);
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    increaseQty: (state, action) => {
      state.cartItems = state.cartItems.map(product =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseQty: (state, action) => {
      state.cartItems = state.map(product =>
        product.id === action.payload && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      sessionStorage.removeItem("cartItems");
    }

  }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;

