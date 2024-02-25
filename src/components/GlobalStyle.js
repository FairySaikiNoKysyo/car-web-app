import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle` 

@font-face {
  font-display: swap; 
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/manrope-v15-latin-regular.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/manrope-v15-latin-500.woff2') format('woff2');
}

@font-face {
  font-display: swap; 
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/manrope-v15-latin-600.woff2') format('woff2'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/montserrat-v26-latin-regular.woff2') format('woff2'); 
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;  
  font-size: 14px;
  line-height: 1.5;
  color : ${p => p.theme.colors.dark};

}

body.ReactModal__Body--open {
    overflow: hidden;
}  

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
  width: 100%;
  height: 100%;  
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  font-family: inherit;
}
`;