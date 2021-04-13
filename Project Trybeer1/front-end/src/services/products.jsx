const url = 'http://localhost:3001/products';

const getAllProducts = () => fetch(`${url}`).then((response) => response.json());

const getImage = (urlImage) => fetch(urlImage);

module.exports = {
  getAllProducts,
  getImage,
};
