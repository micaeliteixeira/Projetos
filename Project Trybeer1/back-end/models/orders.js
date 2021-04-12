const connection = require('./connection');

const coll = 'sales';

const createOrder = async (id, totalPrice, streetInput, houseNumberInput) => {
  const date = new Date();
  const status = 'Pendente';

  const [result] = await connection.execute(
    `INSERT INTO Trybeer.${coll}
    (user_id, total_price, delivery_address, delivery_number, sale_date, status)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [id, totalPrice, streetInput, houseNumberInput, date, status],
  );

  return result;
};

const updateSalesProduct = async (insertId, checkoutProducts) => {
  checkoutProducts.forEach((product) => {
    const { id: productId, productQuantity } = product;

    connection.execute(
    `INSERT INTO Trybeer.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`, [insertId, productId, productQuantity],
    );
  });
};

const getOrdersByUser = async (id) => {
  const [orders] = await connection.execute('SELECT * FROM Trybeer.sales WHERE user_id = ?', [id]);

  return orders;
};

const getOrderDetailsById = async (id) => {
  const [orderDetails] = await connection.execute(
    `SELECT 
    sales.id, sales.total_price, sales.sale_date, sales.status, sp.quantity, prod.name, prod.price
    FROM Trybeer.sales
    INNER JOIN Trybeer.sales_products as sp
    on sales.id = sp.sale_id
    INNER JOIN Trybeer.products as prod
    on sp.product_id = prod.id
    WHERE sales.id = ?;`, [id],
  );

  return orderDetails;
};

module.exports = {
  createOrder,
  updateSalesProduct,
  getOrdersByUser,
  getOrderDetailsById,
};
