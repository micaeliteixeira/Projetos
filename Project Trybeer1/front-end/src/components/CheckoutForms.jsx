import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../hooks/UseContext';
import { createOrder } from '../services/orders';
import '../styles/checkout.css';

function CheckoutForms() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [street, setStreet] = useState({
    streetInput: '',
    houseNumberInput: '',
  });
  const { totalPrice, setTotalPrice, checkoutProducts } = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async () => {
    const visibleInterval = 3000;

    await createOrder(totalPrice, street, checkoutProducts);

    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
      setTotalPrice('0.00');

      localStorage.removeItem('productList');
      localStorage.removeItem('total');

      if (history.location.pathname === '/checkout') history.push('/products');
    }, visibleInterval);
  };

  useEffect(() => {
    if (Number(totalPrice) > 0
      && street.houseNumberInput !== ''
      && street.streetInput !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [street, totalPrice]);

  return (
    <div className="checkoutcontainer">
      <h1 className="adress">Endereço</h1>
      <label htmlFor="streetInput" className="labelcheckout">
        Rua:
        <input
          className="inputcheckout"
          id="streetInput"
          type="text"
          data-testid="checkout-street-input"
          onChange={ ({ target }) => setStreet({ ...street, [target.id]: target.value }) }
        />
      </label>
      <label htmlFor="houseNumberInput" className="labelcheckout">
        Número da casa:
        <input
          className="inputcheckout"
          id="houseNumberInput"
          type="text"
          data-testid="checkout-house-number-input"
          onChange={ ({ target }) => setStreet({ ...street, [target.id]: target.value }) }
        />
      </label>
      <button
        className="buttoncheckout"
        type="submit"
        data-testid="checkout-finish-btn"
        onClick={ handleSubmit }
        disabled={ isDisabled }
      >
        {' '}
        Finalizar Pedido
      </button>
      <div hidden={ isVisible }>Compra realizada com sucesso!</div>
    </div>
  );
}

export default CheckoutForms;
