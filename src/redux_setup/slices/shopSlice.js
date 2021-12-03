import { createSlice } from "@reduxjs/toolkit";

// define initialState

const initialState = {
  shopItem: null,
};

// function to export
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.shopItem = action.payload;
    },
  },
});

export const { addToCart } = shopSlice.actions;

// selectors
export const selectItem = (state) => state.shop.shopItem;

export default shopSlice.reducer;
