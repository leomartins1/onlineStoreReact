import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class CartItems extends React.Component {
  render() {
    const { products, countCartItems } = this.props;
    return (
      products.map((product, index) => (
        <CartItem product={ product } key={ index } countCartItems={ countCartItems } />
      )));
  }
}

CartItems.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  countCartItems: PropTypes.func.isRequired,
};

export default CartItems;
