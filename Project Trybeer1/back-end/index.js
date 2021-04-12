require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const { json } = require('body-parser');
const { usersRouter } = require('./controllers/users');
const { productsRouter } = require('./controllers/products');
const ordersRouter = require('./controllers/orders');
const adminRouter = require('./controllers/admin');

const app = express();
const port = 3001;

app.use(json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
