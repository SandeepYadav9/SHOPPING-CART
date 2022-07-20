import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
  toggle: false,
};
const uiSlice = createSlice({
  name: "toggle",
  initialState: defaultState,
  reducers: {
    toggleHandler: (state, action) => {
      state.toggle = !state.toggle;
    },
  },
});
export const uiActions=uiSlice.actions;
export default uiSlice;
