import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '',
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    storeContentData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, storeContentData } = contentSlice.actions;

export default contentSlice.reducer;
