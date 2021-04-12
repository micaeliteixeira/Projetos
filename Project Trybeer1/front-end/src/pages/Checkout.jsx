import React from 'react';
import { Redirect } from 'react-router-dom';
import { CheckoutForms, CheckoutProducts } from '../components/index';
import TopBar from '../components/TopBar';
import '../styles/checkout.css';

function Checkout() {
  const user = localStorage.getItem('user');

  return !user ? <Redirect to="/login" /> : (
    <div>
      <TopBar name="Finalizar Pedido" />
      <div className="checkoutcontainer">
        <CheckoutProducts />
        <CheckoutForms />
      </div>
    </div>
  );
}

export default Checkout;
