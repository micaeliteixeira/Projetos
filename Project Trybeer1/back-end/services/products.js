const models = require('../models/products');

const getAllProducts = async () => models.getAllProducts();

module.exports = {
  getAllProducts,
};