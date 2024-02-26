import { setFavorites } from '../../Redux/Favorite/favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';

import {
  AccentText,
  ButtonHeart,
  DescriptionInfo,
  DescriptionList,
  ImgWrapper,
  InfoText,
  ItemWrapper,
  MainInfo,
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
    functionalities,
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
      <MainInfo>
        <InfoText>
          {make} <AccentText>{model}</AccentText>,{year}
        </InfoText>
        <InfoText>{rentalPrice}</InfoText>
      </MainInfo>

      <DescriptionList>
        <DescriptionInfo>{city}</DescriptionInfo>
        <DescriptionInfo>{country}</DescriptionInfo>
        <DescriptionInfo>{rentalCompany}</DescriptionInfo>
        {accessories.includes('Premium') && (
          <DescriptionInfo>Premium</DescriptionInfo>
        )}
        <DescriptionInfo>{type}</DescriptionInfo>
        <DescriptionInfo>{mileage}</DescriptionInfo>
        <DescriptionInfo>{id}</DescriptionInfo>
        <DescriptionInfo>{functionalities[0]}</DescriptionInfo>
      </DescriptionList>
    </ItemWrapper>
  );
};
