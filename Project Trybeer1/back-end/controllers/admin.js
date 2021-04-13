const { Router } = require('express');
const services = require('../services/admin');
const validateToken = require('../auth/validateToken');

const adminRouter = new Router();

adminRouter.get('/orders', async (req, res) => {
  const orderSales = await services.getAllOrders();

  return res.status(200).json(orderSales);
});

adminRouter.get('/orders/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const orderDetails = await services.getOrderDetailsById(id);

  res.status(200).json(orderDetails);
});

adminRouter.put('/orders/:orderId', validateToken, async (req, res) => {
  const { orderId } = req.params;

  await services.markAsDelivered(orderId);

  return res.status(200).json({ message: 'order marked as delivered' });
});

module.exports = adminRouter;