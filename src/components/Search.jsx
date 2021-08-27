import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { onClick, onChange } = this.props;
    return (
      <form className="">
        <label
          className=""
          htmlFor="query-input"
          data-testid="home-initial-message"
        >
          <input type="text" placeholder="Buscar produtos e muito mais..." data-testid="query-input" onChange={ onChange } />
        </label>
        <button
          className=""
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
