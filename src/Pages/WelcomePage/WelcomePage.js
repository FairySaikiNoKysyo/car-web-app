import { NavLink } from "react-router-dom"

export const WelcomePage =()=>{

return(

<div  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
      }}>
    <NavLink to='/catalog'>Get your car</NavLink>   
</div>


)


} 