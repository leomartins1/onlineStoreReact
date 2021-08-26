import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  addAndCountCartItem = (result) => {
    const { addToCart, countCartItems } = this.props;
    const ADD_ITEM = 1;
    addToCart(result);
    countCartItems(ADD_ITEM);
  };

  render() {
    const { product } = this.props;
    return (
      <div>
        <img alt={ product.title } src={ product.thumbnail } />
        <p
          data-testid="product-detail-name"
        >
          { product.title }
        </p>
        <p>{ product.price }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => {
            this.addAndCountCartItem(product);
          } }
        >
          Add to Cart!
        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  countCartItems: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDetail;
