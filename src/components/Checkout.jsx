import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      address: '',
      cep: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const { name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fullname, email, cpf, phone, address, cep } = this.state;
    const {
      location: { cartItens },
    } = this.props;
    return (
      <div>
        { cartItens.map((cartItem, index) => (
          <div key={ index }>
            <p>
              Ítem :
              { cartItem.title }
            </p>
            <p>
              Preço :
              { cartItem.price }
            </p>
          </div>
        )) }
        <input
          type="text"
          value={ fullname }
          name="fullname"
          data-testid="checkout-fullname"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          value={ cpf }
          name="cpf"
          data-testid="checkout-cpf"
          onChange={ this.handleChange }
        />
        <input
          type="email"
          value={ email }
          name="email"
          data-testid="checkout-email"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          value={ phone }
          name="phone"
          data-testid="checkout-phone"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          value={ cep }
          name="cep"
          data-testid="checkout-cep"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          value={ address }
          name="address"
          data-testid="checkout-address"
          onChange={ this.handleChange }
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItens: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Checkout;
