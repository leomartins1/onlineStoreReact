import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div className="align-self-center ml-5">
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho de Compras
          <p data-testid="shopping-cart-size">{ counter }</p>
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  counter: PropTypes.func.isRequired,
};

export default CartButton;
