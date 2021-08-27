import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      counter: 0,
    };
  }

  // https://forum.freecodecamp.org/t/update-localstorage-after-setstate-react/167754

  countCartItems = (number) => {
    this.setState((prevState) => {
      localStorage.setItem('counter', JSON.stringify(prevState.counter + number));
      return {
        counter: prevState.counter + number,
      };
    });
  }

  addToCart = (item) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, item],
    }));
  };

  render() {
    const { cartItems, counter } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/product/:id"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  addToCart={ this.addToCart }
                  countCartItems={ this.countCartItems }
                />
              ) }
            />
            <Route
              exact
              path="/"
              render={ (props) => (<Home
                { ...props }
                addToCart={ this.addToCart }
                countCartItems={ this.countCartItems }
                counter={ counter }
              />) }
            />
            <Route
              exact
              path="/checkout"
              render={ (props) => <Checkout { ...props } /> }
            />
            <Route
              exact
              path="/shoppingcart"
              render={ (props) => (
                <ShoppingCart
                  { ...props }
                  cartItems={ cartItems }
                  countCartItems={ this.countCartItems }
                />
              ) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
