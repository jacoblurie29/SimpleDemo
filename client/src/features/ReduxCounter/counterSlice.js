import { createSlice } from "@reduxjs/toolkit";

// TODO #4: Set the initial state of the counter
const initialState = {

}

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      // TODO #5: increment the counter
      
    },
    decrement: (state) => {
      // TODO #6: decrement the counter (if it is less than 1, return before decremented)
      
    },
  },
});

export const { increment, decrement } =
  counterSlice.actions;

export default counterSlice.reducer;
