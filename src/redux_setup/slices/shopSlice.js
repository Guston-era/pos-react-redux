import { createSlice } from "@reduxjs/toolkit";

// define initialState

const initialState = {
  shopItem: [],
};

// function to export
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.shopItem = action.payload;
    },
    clearCart: (state) => {
      state.shopItem = [];
    },
  },
});

export const { addToCart, clearCart } = shopSlice.actions;

// selectors
export const selectItem = (state) => state.shop.shopItem;

export default shopSlice.reducer;
