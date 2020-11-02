import React from 'react';
import './App.css';
import MainContent from './Components/MainContent/MainContent';
import Checkout from './Components/Checkout/Checkout';
import ProductsCategory from './Components/ProductsCategory/ProductsCategory';
import SignIn from './Components/SignIn/SignIn';
import Header from './Components/Header/Header';
import Drawer from './Components/Drawer/Drawer';
import BasketDrawer from './Components/BasketDrawer/BasketDrawer';
import Footer from './Components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Drawer />
        <BasketDrawer />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Redirect from="/shoppingCart" to="/" />
          <Route path="/checkout" component={Checkout} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/categories/:cat" component={ProductsCategory} />
        </Switch>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
