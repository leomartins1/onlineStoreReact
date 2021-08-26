import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    const { results } = this.props;
    this.state = {
      results,
    };
    this.showResults = this.showResults.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { results } = this.props;
    if (results !== prevProps.results) {
      this.updateState(results);
    }
  }

  updateState = (results) => {
    this.setState({ results });
  };

  addAndCountCartItem = (result) => {
    const { addToCart, countCartItems } = this.props;
    const ADD_ITEM = 1;
    addToCart(result);
    countCartItems(ADD_ITEM);
  };

  showResults() {
    const { results } = this.state;
    const cardStyle = {
      width: '18rem',
      padding: '0.5rem',
      color: '#303030',
    };
    const card = results.map((result) => {
      const { title, thumbnail, price, id } = result;
      const freeShipping = <p data-testid="free-shipping">Free Shipping</p>;
      return (
        <div
          className="card mb-3 border border-primary border-3"
          style={ cardStyle }
          key={ title }
          data-testid="product"
        >
          <img className="card-img-top ratio ratio-1x1" src={ thumbnail } alt={ title } />
          <div className="card-body">
            <p className="card-title">{title}</p>
            <p>{`Price: R$ ${price}`}</p>
            {result.shipping.free_shipping ? freeShipping : null }
            <button type="button">
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: `/product/${id}`,
                  productInfo: result,
                } }
              >
                See product details
              </Link>
            </button>
            <button
              className="btn btn-primary"
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => {
                this.addAndCountCartItem(result);
              } }
            >
              Add to Cart!
            </button>
          </div>
        </div>
      );
    });
    return card;
  }

  render() {
    const { results } = this.state;
    if (results.length === 0) {
      return 'Nenhum produto foi encontrado';
    } return (
      <div className="d-flex flex-wrap justify-content-evenly">
        { this.showResults() }
      </div>);
  }
}

ProductCard.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  countCartItems: PropTypes.func.isRequired,
};

export default ProductCard;
