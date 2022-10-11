import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
export const store = configureStore({
  reducer: {
    filter: filtersReducer,
  },
});
