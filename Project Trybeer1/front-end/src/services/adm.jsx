const url = 'http://localhost:3001/admin';

const getAllOrders = () => fetch(`${url}/orders`).then((response) => response.json());

const markAsDelivered = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`${url}/orders/${id}`, {
    method: 'PUT',
    headers: {
      authorization: user.token,
    },
  }).then((response) => response.json());
};

const getOrderDetails = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`${url}/orders/${id}`,
    {
      method: 'GET',

      headers: {
        Authorization: user.token },
    }).then((response) => response.json());
};

module.exports = {
  getAllOrders,
  markAsDelivered,
  getOrderDetails,
};
