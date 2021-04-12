import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { SideBarAdm } from '../components';
import { markAsDelivered, getOrderDetails } from '../services/adm';
import parseCurrency from '../utils/parseCurrencyToBRL';
import '../styles/ordersadmdetails.css';

function DetailsOrderAdm({ match }) {
  const [orderDetails, setOrderDetails] = useState([]);
  const [status, setStatus] = useState('Pendente');
  const history = useHistory();
  const { id } = match.params;

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');

    getOrderDetails(id).then((response) => { setOrderDetails(response); });
  }, [history, id]);

  const handleClick = async () => {
    await markAsDelivered(id);
    setStatus('Entregue');
  };

  useEffect(() => {
    const statusOrder = orderDetails.map((order) => order.status)[0];
    if (statusOrder === 'Entregue') {
      setStatus('Entregue');
    }  
    const testeStatus = document.querySelector(".status");
    if(testeStatus .innerHTML === 'Entregue'){
       testeStatus.className = 'status-entregue';
    }
    
  });

  return !orderDetails ? <h1>Loading...</h1> : (
    <div>
      <SideBarAdm />
      <div className="detail-order-adm">
        <div className="order-status-adm">
          <span data-testid="order-number">
            {`Pedido ${id}`}
          </span>
          <span>-</span>
          <span data-testid="order-status" className="status">
            {status}
          </span>
        </div>
        <div className="order-items-adm">
          <ul>
            {(orderDetails.map((order, index) => (
              <li key={ index }>
                <span data-testid={ `${index}-product-qtd` }>
                  { `${order.quantity}  ` }
                </span>
                <span data-testid={ `${index}-product-name` }>
                  { ` ${order.name}  ` }
                </span>
                <span data-testid={ `${index}-order-unit-price` }>
                  { `  (${parseCurrency(order.price)})` }
                </span>
                <span
                  className="total-item-price"
                  data-testid={ `${index}-product-total-value` }
                >
                  { parseCurrency(`${(order.price * order.quantity).toFixed(2)}`) }
                </span>
              </li>)))}
          </ul>
          <span className="price-order" data-testid="order-total-value">
            Total:
            { orderDetails.map((order) => parseCurrency(order.total_price))[0] }
          </span>
        </div>
        <button
          type="button"
          data-testid="mark-as-delivered-btn"
          onClick={ handleClick }
          hidden={ status === 'Entregue' }
          className="delivered-button"
        >
          Marcar como entregue
        </button>
      </div>
    </div>
  );
}

DetailsOrderAdm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default DetailsOrderAdm;
