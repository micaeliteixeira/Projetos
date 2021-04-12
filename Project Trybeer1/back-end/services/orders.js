const models = require('../models/orders');

const createOrder = async (id, totalPrice, streetInput, houseNumberInput) => {
  const { insertId } = await models.createOrder(id, totalPrice, streetInput, houseNumberInput);
  
  return insertId;
};

const updateSalesProduct = async (insertId, checkoutProducts) => {
  models.updateSalesProduct(insertId, checkoutProducts);
};

const getOrdersByUser = async (id) => models.getOrdersByUser(id);

const getOrderDetailsById = async (id) => models.getOrderDetailsById(id);

module.exports = {
  createOrder,
  updateSalesProduct,
  getOrdersByUser,
  getOrderDetailsById,
};
