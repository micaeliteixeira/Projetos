const url = 'http://localhost:3001/orders';

const createOrder = async (totalPrice, street, checkoutProducts) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { streetInput, houseNumberInput } = street;
  const body = { totalPrice, streetInput, houseNumberInput, checkoutProducts };

  return fetch(`${url}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token,
      },
      body: JSON.stringify(body),
    })
    .then((response) => response.json());
};

const getOrdersByUser = async () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`${url}`,
    {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token },
    }).then((response) => response.json());
};

const getOrderDetails = async (path) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`${path}`,
    {
      method: 'GET',

      headers: {
        Authorization: user.token },
    }).then((response) => response.json());
};

module.exports = {
  createOrder,
  getOrdersByUser,
  getOrderDetails,
};
