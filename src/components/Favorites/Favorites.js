import { StyledList } from 'components/Catalog/Catalog.styled';
import { selectFavoriteCards } from '../../Redux/selectors';
import { CatalogCard } from 'components/CatalogCard/CatalogCard';


import { useSelector } from 'react-redux';


export const Favorites = () => {
  const favorites = useSelector(selectFavoriteCards);
  
  return (
    <>
      {' '}
      {favorites.length > 0 && (
        <StyledList>
          {favorites.map(advert => (
            <li key={advert.id}>
              <CatalogCard advert={advert} />
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
};