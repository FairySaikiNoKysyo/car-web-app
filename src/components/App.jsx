import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { WelcomePage } from 'Pages/WelcomePage/WelcomePage';
import { CatalogPage } from 'Pages/CatalogPage/CatalogPage';
import { FavoritePage } from 'Pages/Favorites/FavoritesPage';

// const WelcomePage = lazy(() => import('../Pages/WelcomePage/WelcomePage'));
// const CatalogPage = lazy(() => import('../Pages/CatalogPage/CatalogPage'));
// const FavoritePage = lazy(() => import('../Pages/Favorites/FavoritesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<WelcomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
