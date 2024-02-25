
import { fetchAllCars } from "../../Redux/operations";
import { selectCars, selectFilter, selectFilteredCars } from "../../Redux/selectors";
import { Catalog } from "components/Catalog/Catalog"
import { FiltersBar } from "components/FiltersBar/FiltersBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const CatalogPage = () =>{
    const dispatch = useDispatch(selectCars);
    const cars = useSelector(selectFilteredCars);
    const filters =useSelector(selectFilter)
    const allCars = useSelector(selectCars)
    console.log(cars);
    console.log(filters)
    console.log(allCars)
    
  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

return(
    
    <div>
        <FiltersBar/>
        <Catalog cars = {cars}/>
    
    </div>




)



}