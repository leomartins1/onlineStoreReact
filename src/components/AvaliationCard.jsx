import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvaliationCard extends Component {
  render() {
    const { avaliations } = this.props;
    const { email, opinion, rating } = avaliations;
    return (
      <div>
        <h3>
          { email }
        </h3>
        <p>
          { opinion }
        </p>
        <p>
          Avaliação:
          { rating }
        </p>
      </div>
    );
  }
}

AvaliationCard.propTypes = {
  avaliations: PropTypes.shape({
    email: PropTypes.string,
    opinion: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default AvaliationCard;
