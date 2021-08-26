import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProductForm from './ProductForm';
import ProductDetail from './ProductDetail';

class ProductDetails extends Component {
  render() {
    const { addToCart, countCartItems } = this.props;
    const { location: { productInfo } } = this.props;
    return (
      <div>
        <ProductDetail
          product={ productInfo }
          addToCart={ addToCart }
          countCartItems={ countCartItems }
        />
        <Link to="/">Home</Link>
        <ProductForm product={ productInfo } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  countCartItems: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  location: PropTypes.shape({
    productInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
