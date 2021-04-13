const { Router } = require('express');
const services = require('../services/products');

const productsRouter = new Router();

productsRouter.get('/', async (req, res) => {
  const products = await services.getAllProducts();

  return res.status(200).json({ products });
});

module.exports = {
  productsRouter,
};