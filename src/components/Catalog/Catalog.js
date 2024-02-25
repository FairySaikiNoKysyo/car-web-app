import { CatalogCard } from "components/CatalogCard/CatalogCard"

export const Catalog = ({cars}) =>{

return (
<div>
<ul>
{cars.map((car)=>
<li key = {car.id}>
  <CatalogCard car = {car}/>


</li>

)}
    
</ul>
</div>

)

}