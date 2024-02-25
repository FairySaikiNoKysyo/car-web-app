import { fetchAllCars } from '../../Redux/operations';
import {
  
 
  selectFilteredCars,
} from '../../Redux/selectors';
import { Catalog } from 'components/Catalog/Catalog';
import { FiltersBar } from 'components/FiltersBar/FiltersBar';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectFilteredCars);

  const shouldRenderLoadMoreBtn = cars.length % 12 === 0;

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div>
      <FiltersBar />
      <Catalog cars={cars} />
      {shouldRenderLoadMoreBtn && <LoadMoreBtn />}
    </div>
  );
};
