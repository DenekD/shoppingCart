import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import reducer, { initialState } from './context/reducer';
import { BasketStateProvider } from './context/BasketStateProvider';
import ProductsContextProvider from './context/categoriesContext';

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <BasketStateProvider initialState={initialState} reducer={reducer}>
        <App />
      </BasketStateProvider>
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
