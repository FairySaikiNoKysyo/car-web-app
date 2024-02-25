import { setFavorites } from '../../Redux/Favorite/favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonHeart,
  ImgWrapper,
  ItemWrapper,
  StyledImg,
} from './CatalogCard.styled';
import { useState } from 'react';
import { selectFavorite } from '../../Redux/Favorite/selectors';
import sprite from '../../images/icons.svg';

export const CatalogCard = ({ car }) => {
  const {
    make,
    model,
    type,
    img,
    year,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
    id,
  } = car;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some(favorite => favorite.id === id)
  );

  const city = address ? address.split(',')[1].trim() : '';
  const country = address ? address.split(',')[2].trim() : '';

  const handleToggle = () => {
    dispatch(setFavorites(car));
    console.log(car);
    setIsFavorite(prevIsFavorite => !prevIsFavorite);
  };
  return (
    <ItemWrapper>
      <ImgWrapper>
        <StyledImg src={img} alt={make} />
        <ButtonHeart
          type="button"
          onClick={handleToggle}
          data-favorite={isFavorite}
        >
          <svg>
            <use xlinkHref={`${sprite}#icon-heart`} />
          </svg>
        </ButtonHeart>
      </ImgWrapper>
      <div>
        <h3>
          {make} <span>{model}</span>,{year}
        </h3>
        <p>{rentalPrice}</p>
      </div>
      <div>
        <ul>
          <li>{city}</li>
          <li>{country}</li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{mileage}</li>
          <li>{accessories[0]}</li>
        </ul>
      </div>
    </ItemWrapper>
  );
};
