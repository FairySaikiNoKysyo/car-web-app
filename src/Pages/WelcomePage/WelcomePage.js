import { NavLink } from "react-router-dom"

export const WelcomePage =()=>{

return(

<div  style={{
    display:'inline-block',
        width: '100%',
        minHeight: '100vh',
     
        left: '50%'
      }}>
    <NavLink to='/catalog'>Get your car</NavLink>   
</div>


)


} 