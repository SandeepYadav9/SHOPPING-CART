import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
  items: [],
  cartCounter: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addToCartHandler: (state, action) => {
      const newItem = action.payload;
      state.cartCounter++;
      const avalabelItem = state.items.find((item) => item.id === newItem.id);
      if (!avalabelItem) {
        state.items.push({
          itemId: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalQuantity: newItem.price,
        });
      } else {
        avalabelItem.quantity++;
        avalabelItem.totalQuantity = avalabelItem.totalQuantity + newItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const avalabelItem = state.items.find((item) => item.id === id);
      state.cartCounter--;
      state.changed = true;
      if (avalabelItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        avalabelItem.quantity--;
        avalabelItem.totalQuantity =
          avalabelItem.totalQuantity - avalabelItem.price;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
