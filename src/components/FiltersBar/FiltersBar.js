import { Field, Formik } from 'formik';
import Select from 'react-select';
import { options, priceOptions } from './options';

import { setFilter } from '../../Redux/filterSlice';
import { useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { FilterWrapper } from './FiltersBar.styled';
import { NavigationLink } from 'components/NavBar/NavBar.styled';

export const FiltersBar = () => {
  const dispatch = useDispatch();

  const parseNumber = value => {
    return value === '' ? null : parseFloat(value.replace(/,/g, ''));
  };

  return (
    <Formik
      initialValues={{
        carBrand: '',
        price: 0,
        mileageFrom: '',
        mileageTo: '',
      }}
      onSubmit={(values, { setFieldError }) => {
        const mileageFrom = parseNumber(values.mileageFrom);
        const mileageTo = parseNumber(values.mileageTo);

        if (mileageFrom < 0 || mileageTo < 0) {
          setFieldError('mileageFrom', 'We used minus');
          setFieldError('mileageTo', 'We used minus');
          return;
        }

        const filters = {
          brand: values.carBrand,
          price: values.price,
          mileageFrom,
          mileageTo,
        };

        dispatch(setFilter(filters));
      }}
    >
      {({ setFieldValue, submitForm, resetForm }) => (
        <FilterWrapper>
          <div>
            <Select
              name="carBrand"
              // value={resetState ? null : options.find(option => option.value === values.carBrand)}
              onChange={selectedOption =>
                setFieldValue('carBrand', selectedOption.value)
              }
              options={options}
              placeholder="Choose your car"
            />
          </div>
          <div>
            <Select
              name="price"
              // value={price}
              onChange={selectedOption =>
                setFieldValue('price', selectedOption.value)
              }
              options={priceOptions}
              placeholder="To $"
            />
          </div>

          <Field name="mileageFrom">
            {({ field }) => (
              <NumericFormat
                {...field}
                placeholder="From"
                displayType={'input'}
                thousandSeparator={true}
                onValueChange={values => {
                  setFieldValue('mileageFrom', values.value);
                }}
              />
            )}
          </Field>
          <Field name="mileageTo">
            {({ field }) => (
              <NumericFormat
                {...field}
                placeholder="To"
                displayType={'input'}
                thousandSeparator={true}
                onValueChange={values => {
                  setFieldValue('mileageTo', values.value);
                }}
              />
            )}
          </Field>
          <button type="submit">Search</button>
          <button
            type="button"
            onClick={() => {
              submitForm();
              setFieldValue('carBrand', '');
              setFieldValue('price', 0);
              setFieldValue('mileageFrom', '');
              setFieldValue('mileageTo', '');
              resetForm();
            }}
          >
            Reset Filters
          </button>
          <NavigationLink to="/favorites">Favorites</NavigationLink>
        </FilterWrapper>
      )}
    </Formik>
  );
};
