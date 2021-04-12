import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../hooks/UseContext';
import parseCurrency from '../utils/parseCurrencyToBRL';
import '../styles/cartbutton.css';

function CartButton() {
  const { totalPrice, setTotalPrice } = useContext(Context);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    let total = JSON.parse(localStorage.getItem('total'));

    if (!total) {
      total = '0.00';
      localStorage.setItem('total', total);
    } else {
      setTotalPrice(total);
    }
  }, [setTotalPrice]);

  useEffect(() => {
    if (Number(totalPrice) > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    localStorage.setItem('total', JSON.stringify(totalPrice));
  }, [totalPrice]);

  return (
    <button
      className="cartbutton"
      disabled={ isDisabled }
      data-testid="checkout-bottom-btn"
      type="button"
      onClick={ () => history.push('/checkout') }
    >
      { 'Ver Carrinho    ' }
      <span data-testid="checkout-bottom-btn-value">{ parseCurrency(totalPrice) }</span>
    </button>
  );
}

export default CartButton;
