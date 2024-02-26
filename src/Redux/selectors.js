import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.cars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.isError;
export const selectCarDetails = (state) => state.cars.carDetails;
export const selectFilter = state => state.filter;
export const selectFavoriteCards = state => state.favorite.favorites;


export const selectFilteredCars = createSelector(
    [selectCars, selectFilter],
    (cars, filter) => {
      return cars.filter((car) => {
        const rentalPriceNumeric = parseFloat(car.rentalPrice.replace("$", ""));
        console.log(car.mileage);
        return (
          (!filter.brand || car.make === filter.brand) &&
          (!filter.price || rentalPriceNumeric  <= filter.price) && 
          (!filter.mileageFrom || car.mileage >= filter.mileageFrom) &&
          (!filter.mileageTo || car.mileage <= filter.mileageTo)
        );
      });
    }
  );