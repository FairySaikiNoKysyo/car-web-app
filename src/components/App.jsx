
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { WelcomePage } from "Pages/WelcomePage/WelcomePage";
import { CatalogPage } from "Pages/CatalogPage/CatalogPage";
import { FavoritePage } from "Pages/Favorites/FavoritesPage";

export const App = () => {
  return (

<Routes>
<Route path='/' element={<Layout/>}/>
<Route index element={<WelcomePage />} />
<Route path='/catalog' element={<CatalogPage/>}/>
<Route path='/favorites' element={<FavoritePage/>}/>


</Routes>


    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
