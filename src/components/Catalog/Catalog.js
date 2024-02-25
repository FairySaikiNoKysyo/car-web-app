import { CatalogCard } from 'components/CatalogCard/CatalogCard';
import { StyledList } from './Catalog.styled';

export const Catalog = ({ cars }) => {
  return (
    <div>
      <StyledList>
        {cars.map(car => (
          <li key={car.id}>
            <CatalogCard car={car} />
          </li>
        ))}
      </StyledList>
    </div>
  );
};
