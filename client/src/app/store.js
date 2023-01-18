import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/ReduxCounter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
