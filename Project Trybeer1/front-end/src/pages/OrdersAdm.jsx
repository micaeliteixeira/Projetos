import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SideBarAdm, OrderCardAdm } from '../components';
import { getAllOrders } from '../services/adm';
import '../styles/ordersadm.css';

function OrderAdm() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    getAllOrders().then((json) => setAllOrders(json));
  }, []);

  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');
  }, [history]);

  return !allOrders ? <h1>Loading...</h1> : (
    <div>
      <SideBarAdm />
      <h1 className="title-order-adm"> Pedidos </h1>
      <div className="orderadmcontainer">
        {allOrders.map((order, index) => (
          <OrderCardAdm
            key={ order.id }
            orderInfo={ order }
            index={ index }
          />))}
      </div>
    </div>
  );
}

export default OrderAdm;
