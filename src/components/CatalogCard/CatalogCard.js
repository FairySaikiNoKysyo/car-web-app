export const CatalogCard = ({
  car: {
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
  },
}) => {
  const city = address ? address.split(',')[1].trim() : '';
  const country = address ? address.split(',')[2].trim() : '';
  return (
    <div>
      <div>
        <img src={img} alt={make} />
      </div>
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
    </div>
  );
};
