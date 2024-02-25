import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchCarDetails, fetchMoreCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    carDetails: {},
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.isError = false;
      })
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchMoreCars.pending, handlePending)
      .addCase(fetchMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [...state.cars, ...action.payload];
        state.isError = false;
      })
      .addCase(fetchMoreCars.rejected, handleRejected)
      .addCase(fetchCarDetails.pending, handlePending)
      .addCase(fetchCarDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carDetails = action.payload;
        state.isError = false;
      })
      .addCase(fetchCarDetails.rejected, handleRejected);
  },
});

  
export const carsReducer = carsSlice.reducer;










// extraReducers: {
//     [fetchAllCars.pending]: handlePending,
//     [fetchAllCars.fulfilled](state, action) {
//       state.isLoading = false;
//       state.cars = action.payload;
//       state.isError = false;
//     },
//     [fetchAllCars.rejected]: handleRejected,
//     [fetchMoreCars.pending]: handlePending,
//     [fetchMoreCars.fulfilled](state, action) {
//       state.isLoading = false;
//       state.cars = [...state.cars, ...action.payload];
//       state.isError = false;
//     },
//     [fetchMoreCars.rejected]: handleRejected,
//     [fetchCarDetails.pending]: handlePending,
//     [fetchCarDetails.fulfilled](state, action) {
//       state.isLoading = false;
//       state.carDetails = action.payload;
//       state.isError = false;
//     },
//     [fetchCarDetails.rejected]: handleRejected,
//   },
// });