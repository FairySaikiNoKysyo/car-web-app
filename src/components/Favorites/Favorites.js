import { StyledList } from 'components/Catalog/Catalog.styled';
import { selectFavoriteCards } from '../../Redux/selectors';
import { CatalogCard } from 'components/CatalogCard/CatalogCard';

import { useSelector } from 'react-redux';
import { NavigationLink } from 'components/NavBar/NavBar.styled';

export const Favorites = () => {
  const favorites = useSelector(selectFavoriteCards);

  return (
    <>
     <div><NavigationLink to="/catalog"> To Catalog</NavigationLink></div>
      {favorites.length > 0 && (
        <StyledList>
          {favorites.map(favorite => (
            <li key={favorite.id}>
              <CatalogCard car={favorite} />
            </li>
          ))}
        </StyledList>
      )}
     
    </>
  );
};
