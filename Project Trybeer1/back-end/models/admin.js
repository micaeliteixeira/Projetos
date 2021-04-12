const connection = require('./connection');

const getAllOrders = async () => {
  const [orderSales] = await connection.execute('SELECT * FROM Trybeer.sales;');

  return orderSales;
};

const markAsDelivered = async (orderId) => {
  connection.execute('UPDATE Trybeer.sales SET status = "Entregue" WHERE id = ?', [orderId]);
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
  getAllOrders,
  markAsDelivered,
  getOrderDetailsById,
};