import './App.css';
import React from 'react';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { Route, Link, Switch } from "react-router-dom";

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/productspage">Products Page</Link>
          </li>
          <li>
            <Link to="/cartpage">Cart Page</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/productspage">
          <ProductsPage />
        </Route>
        <Route path="/cartpage">
          <CartPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
