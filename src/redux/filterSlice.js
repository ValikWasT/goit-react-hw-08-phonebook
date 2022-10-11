import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setFilterValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
