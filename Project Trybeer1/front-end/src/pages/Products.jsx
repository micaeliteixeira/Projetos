import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductCard, CartButton } from '../components/index';
import TopBar from '../components/TopBar';
import { getAllProducts } from '../services/products';
import '../styles/productcard.css';

function Products() {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  const createList = () => {
    let productList = JSON.parse(localStorage.getItem('productList'));

    if (!productList) {
      productList = [];
      localStorage.setItem('productList', JSON.stringify(productList));
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');

    getAllProducts().then((json) => setProducts(json.products));
  }, [history]);

  useEffect(() => {
    createList();
  }, []);

  return !products ? <h1>Loading...</h1> : (
    <div>
      <TopBar name="TryBeer" />
      <div className="productcontainer">
        <div className="cardcontainer">
          {products.map((product, index) => (
            <ProductCard key={ product.id } productInfo={ product } index={ index } />
          ))}
        </div>
        <CartButton />
      </div>
      <div className="footer" />
    </div>
  );
}

export default Products;
