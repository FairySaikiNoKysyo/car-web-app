// import React, { Fragment } from 'react';
// import Modal from 'react-modal';
// import sprite from '../../images/icons.svg';
// import {
//   AdvTitle,
//   AdvertImg,
//   CLoseBtn,
//   ModalWrapper,
//   IconClose,
//   Description,
//   Btn,
//   ModalOverlay,
//   StyledList,
//   StyledListItem,
//   ConditionsWrapperStyled,
//   SubTitleModalStyled,
//   AccWrapperStyled,
//   InfoModalAccWrapperStyl,
//   InfoModalItemStyled,
//   InfoWrapperStyled,
//   TextConditionsWrapperStyled,
//   RentalConditionStyled,
//   ConditionStyled,
//   AccentNumberStyled,
// } from './Modal.styled';
// import { nanoid } from 'nanoid';

// Modal.setAppElement('#root');

// export const ModalDetails = ({ car, closeModal }) => {
//   const {
//     img,
//     model,
//     make,
//     year,
//     id,
//     type,
//     description,
//     fuelConsumption,
//     engineSize,

//     address,
//   } = car;
//   const city = address ? address.split(',')[1].trim() : '';
//   const country = address ? address.split(',')[2].trim() : '';
//   const formattedMileage = `${car.mileage.toString().slice(0, 1)},${car.mileage
//     .toString()
//     .slice(1)}`;
//   return (
//     <>
//       <ModalOverlay onClick={closeModal} />
//       <ModalWrapper className="custom-modal">
//         <CLoseBtn type="button" onClick={closeModal}>
//           <IconClose>
//           <use xlinkHref={`${sprite}#icon-close`} />
//           </IconClose >
//         </CLoseBtn>
//         <AdvertImg src={img} alt={model}></AdvertImg>

//         <AdvTitle>
//           {make} <span>{model}</span>, {year}
//         </AdvTitle>
//         <StyledList>
//           <StyledListItem>{city}</StyledListItem>
//           <StyledListItem>{country}</StyledListItem>
//           <StyledListItem>id: {id} </StyledListItem>
//           <StyledListItem>Year: {year} </StyledListItem>
//           <StyledListItem>Tupe: {type} </StyledListItem>
//           <StyledListItem>Fuel</StyledListItem>
//           <StyledListItem>Consumption: {fuelConsumption}</StyledListItem>
//           <StyledListItem>Engine Size: {engineSize}</StyledListItem>
//         </StyledList>

//         <Description>{description}</Description>
//         <ConditionsWrapperStyled>
//           <SubTitleModalStyled>
//             Accessories and functionalities:
//           </SubTitleModalStyled>
//           <AccWrapperStyled>
//             <InfoModalAccWrapperStyl>
//               {car.accessories.map(accessory => {
//                 const accessoriesID = nanoid();
//                 return (
//                   <InfoModalItemStyled key={accessoriesID}>
//                     {accessory}
//                   </InfoModalItemStyled>
//                 );
//               })}
//             </InfoModalAccWrapperStyl>
//             <InfoWrapperStyled>
//               {car.functionalities.map(functionality => {
//                 const funcID = nanoid();
//                 return (
//                   <InfoModalItemStyled key={funcID}>
//                     {functionality}
//                   </InfoModalItemStyled>
//                 );
//               })}
//             </InfoWrapperStyled>
//           </AccWrapperStyled>
//         </ConditionsWrapperStyled>

//         <ConditionsWrapperStyled>
//           <SubTitleModalStyled>Rental Conditions:</SubTitleModalStyled>
//           <TextConditionsWrapperStyled>
//             {car.rentalConditions.split('\n').map((condition, index) => (
//               <RentalConditionStyled key={index}>
//                 <ConditionStyled>
//                   {condition.includes(':')
//                     ? condition
//                         .split(':')
//                         .map((part, i) => (
//                           <Fragment key={i}>
//                             {i === 0 ? (
//                               <RentalConditionStyled>
//                                 {part}:&nbsp;
//                               </RentalConditionStyled>
//                             ) : (
//                               <AccentNumberStyled>{part}</AccentNumberStyled>
//                             )}
//                           </Fragment>
//                         ))
//                     : condition}
//                 </ConditionStyled>
//               </RentalConditionStyled>
//             ))}
//             <RentalConditionStyled>
//               <ConditionStyled>
//                 Mileage:&nbsp;
//                 <AccentNumberStyled> {formattedMileage}</AccentNumberStyled>
//               </ConditionStyled>
//               <ConditionStyled>
//                 Price:&nbsp;
//                 <AccentNumberStyled> {car.rentalPrice}</AccentNumberStyled>
//               </ConditionStyled>
//             </RentalConditionStyled>
//           </TextConditionsWrapperStyled>
//         </ConditionsWrapperStyled>
//         <a href="tel:+380730000000">
//           <Btn type="button">Rental car</Btn>
//         </a>
//       </ModalWrapper>
//     </>
//   );
// };