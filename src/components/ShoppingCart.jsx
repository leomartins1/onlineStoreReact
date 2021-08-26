import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Empty from './Empty';
import CartItems from './CartItems';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    const { cartItems } = this.props;
    this.state = {
      products: cartItems,
    };
  }

  render() {
    const { countCartItems } = this.props;
    const { products } = this.state;
    if (products.length === 0) {
      return (
        <div>
          <Empty />
          <Link to="/">Home</Link>
        </div>
      );
    }
    if (products.length !== 0) {
      return (
        <div>
          <CartItems products={ products } countCartItems={ countCartItems } />
          <Link to="/">Home</Link>
          <button type="button">
            <Link
              data-testid="checkout-products"
              to={ {
                pathname: '/checkout',
                cartItens: products,
              } }
            >
              Finish purchase
            </Link>
          </button>
        </div>
      );
    }
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  countCartItems: PropTypes.func.isRequired,
};

export default ShoppingCart;
