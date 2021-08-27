import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

import Search from './Search';
import ProductCard from './ProductCard';
import CategoriesList from './CategoriesList';
import CartButton from './CartButton';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: '',
      showCard: false,
    };

    this.handleCategoriesList = this.handleCategoriesList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ search: target.value });
  }

  async handleCategoriesList({ target }) {
    const { results } = await getProductsFromCategoryAndQuery(target.value, '');
    this.setState({
      results,
      showCard: true,
    });
  }

  async handleClick() {
    const { search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', search);
    console.log(results);
    this.setState({
      results,
      showCard: true,
    });
  }

  render() {
    const { addToCart, countCartItems, counter } = this.props;
    const { results, showCard } = this.state;
    return (
      <div>
        <div className="navBar">
          <h1 className="">Online Store</h1>
          <Search onClick={ this.handleClick } onChange={ this.handleChange } />
          <CartButton counter={ counter } />
        </div>
        <div className="">
          <CategoriesList onClick={ this.handleCategoriesList } />
          { (showCard && <ProductCard
            results={ results }
            addToCart={ addToCart }
            countCartItems={ countCartItems }
          />) }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  countCartItems: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Home;
