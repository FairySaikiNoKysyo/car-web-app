import { Field, Form, Formik } from 'formik';
import Select from 'react-select';
import { options, priceOptions } from './options';
import { useState } from 'react';
import { setFilter } from '../../Redux/filterSlice';
import { useDispatch } from 'react-redux';

export const FiltersBar = () => {
  const dispatch = useDispatch();
  const [carBrand, setCarBrand] = useState(null);
  const [price, setPrice] = useState(null);

  const formatNumber = (value) => {
    if (!value) {
      return ''; // Повертаємо порожній рядок для порожнього вводу
    }
  
    const number = parseFloat(value.replace(/,/g, ''));
    return isNaN(number) ? '' : number.toLocaleString();
  };
  
  // Функція для розкодування числа при відправці форми
  const parseNumber = (value) => {
    return value === '' ? '' : parseFloat(value.replace(/,/g, ''));
  };


  // const validateNumber = value => {
  //   const isNumber = /^\d+$/.test(value);
  //   return isNumber ? undefined : 'Enter a valid number';
  // };

  // const validatePositiveNumber = value => {
  //   const isNumber = /^\d+$/.test(value);
  //   return isNumber && parseInt(value, 10) >= 0
  //     ? undefined
  //     : 'Enter a positive number';
  // };

  return (
    <Formik
      initialValues={{
        carBrand: '',
        price: 0,
        mileageFrom: '',
        mileageTo: '',
      }}
      onSubmit={(values, ) => {
        console.log(values);
        const filters = {
          brand: values.carBrand,
          price: values.price,
          mileageFrom: values.mileageFrom,
          mileageTo: values.mileageTo,
          
        };

        console.log(filters);
        dispatch(setFilter(filters));

        // resetForm();
        // onCloseModal();
        // successToaster();
      }}
    >
  {({ setFieldValue }) => (
<Form>
        <Select
          name="carBrand"
          // value={carBrand}
          onChange={(selectedOption) => setFieldValue("carBrand", selectedOption.value)}
          options={options}
          placeholder="Choose your car"
        />

        <Select
          name="price"
          // value={price}
          onChange={(selectedOption) => setFieldValue("price", selectedOption.value)}
          options={priceOptions}
          placeholder="To $"
        />

        <Field
          name="mileageFrom"
          placeholder="From"
          // validate={value => {
          //   return validateNumber(value) || validatePositiveNumber(value);
          // }}
        />
        <Field
          name="mileageTo"
          placeholder="To"
          // validate={value => {
          //   return validateNumber(value) || validatePositiveNumber(value);
          // }}
        />
       <button type='submit'>Search</button>
      </Form>
  )}
    </Formik>
  );
};
