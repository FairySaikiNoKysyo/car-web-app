import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store,persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    lightBlue: '#3470ff',
    blue: '#0b44cd',
    white: '#fff',
    dark: '#121417',
    light: '#f7f7fb',
    labelGrey: ' #8a8a89',
    imgBgn: ' #f3f3f2',
    iconStroke: 'rgba(255, 255, 255, 0.8)',
    conditionBgn: '#F9F9F9',
    condition: '#363535',
    scroll: 'rgba(18, 20, 23, 0.05)',
    gradient: 'linear-gradient(180deg, #121417 0%, rgba(18, 20, 23, 0) 100%)',
  },
  radius: {
    s: '12px',
    m: '14px',
    l: '24px',
    xl: '35px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <PersistGate persistor={persistor}>
    <BrowserRouter basename='/car-web-app'>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
