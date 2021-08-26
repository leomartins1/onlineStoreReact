import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  }

  handleAddButton = () => {
    const { countCartItems } = this.props;
    const ADD_ITEM = 1;
    const { product } = this.props;
    const { quantity } = this.state;
    if (quantity > (product.available_quantity - 1)) {
      return null;
    }
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
    countCartItems(ADD_ITEM);
  }

  handleSubButton = () => {
    const { quantity } = this.state;
    const { countCartItems } = this.props;
    const REMOVE_ITEM = -1;
    if (quantity === 0) {
      return null;
    }
    this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    countCartItems(REMOVE_ITEM);
  }

  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    return (
      <div
        data-testid="product-add-to-cart"
      >
        <p data-testid="shopping-cart-product-name">{ product.title }</p>
        <button
          type="button"
          onClick={ this.handleAddButton }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          onClick={ this.handleSubButton }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
      </div>);
  }
}

CartItem.propTypes = {
  countCartItems: PropTypes.func.isRequired,
  product: PropTypes.shape({
    available_quantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
