import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { brand: '', price: 0, mileageTo: 0, mileageFrom: 1000000 },
  reducers: {
    setFilter(state, action) {
        console.log(action)
        // console.log(state)
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
