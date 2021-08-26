import React, { Component } from 'react';
import AvaliationCard from './AvaliationCard';

class ProductForm extends Component {
  constructor() {
    super();
    this.state = {
      avaliations: [],
      email: '',
      opinion: '',
      rating: 0,
    };
  }

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  handleChangeOpinion = (event) => {
    this.setState({
      opinion: event.target.value,
    });
  }

  handleChangeRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  }

  handleClick = () => {
    const { email, opinion, rating } = this.state;
    const avaliation = {
      email,
      opinion,
      rating,
    };
    this.setState((prevState) => ({
      avaliations: [...prevState.avaliations, avaliation],
    }));
  }

  render() {
    const { avaliations } = this.state;
    const { opinion, rating, email } = this.state;
    return (
      <div>
        <form>
          <legend><h2>Avalições</h2></legend>
          <input
            value={ email }
            type="text"
            onChange={ this.handleChangeEmail }
          />
          <div>
            <select
              required
              value={ rating }
              onChange={ this.handleChangeRating }
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <textarea
            value={ opinion }
            name=""
            data-testid="product-detail-evaluation"
            onChange={ this.handleChangeOpinion }
            cols="30"
            rows="10"
            placeholder="Mensagem(opcional)"
          />
          <div>
            <button type="button" onClick={ this.handleClick }>Avaliar</button>
          </div>
        </form>
        <div>
          {avaliations ? avaliations
            .map((item, index) => (
              <AvaliationCard key={ index } avaliations={ item } />)) : null}
        </div>
      </div>
    );
  }
}

export default ProductForm;
