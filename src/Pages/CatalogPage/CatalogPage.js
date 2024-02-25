
import { fetchAllCars } from "../../Redux/operations";
import { selectCars } from "../../Redux/selectors";
import { Catalog } from "components/Catalog/Catalog"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const CatalogPage = () =>{
    const dispatch = useDispatch(selectCars);
    const cars = useSelector(selectCars);
    
  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

return(
    
    <div><Catalog cars = {cars}/></div>




)



}