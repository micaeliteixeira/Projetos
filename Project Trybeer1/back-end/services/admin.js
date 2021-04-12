const models = require('../models/admin');

const getAllOrders = async () => models.getAllOrders();

const markAsDelivered = async (orderId) => models.markAsDelivered(orderId);

const getOrderDetailsById = async (id) => models.getOrderDetailsById(id);

module.exports = {
  getAllOrders,
  markAsDelivered,
  getOrderDetailsById,
};