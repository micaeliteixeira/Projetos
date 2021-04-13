const connection = require('./connection');

const coll = 'products';

const getAllProducts = async () => {
  const [products] = await connection.execute(`SELECT * FROM Trybeer.${coll};`);

  return products;
};

module.exports = {
  getAllProducts,
};