import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { onClick, onChange } = this.props;
    return (
      <form className="d-flex p-2 bd-highlight">
        <label
          className="d-flex flex-column bd-highlight mb-3"
          htmlFor="query-input"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input type="text" data-testid="query-input" onChange={ onChange } />
        </label>
        <button
          className="align-self-center ms-2"
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
