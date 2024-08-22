import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
import { createTheme } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    background: {
      default: '#161623',
    },
    text: {
      primary: '#fff',
    },
  },
  border: {
    color: '#fff',
  },
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  //react hook form
);
//BrowserRouter
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
