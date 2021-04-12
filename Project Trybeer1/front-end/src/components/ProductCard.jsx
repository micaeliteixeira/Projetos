import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import parseCurrency from '../utils/parseCurrencyToBRL';
import Context from '../hooks/UseContext';
import '../styles/productcard.css';

function ProductCard({ productInfo, index }) {
  const { totalPrice, setTotalPrice } = useContext(Context);
  const { id, name, price, url_image: urlImage } = productInfo;
  const [productQuantity, setProductQuantity] = useState('0');

  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem('productList'));

    const item = productList.find((product) => product.name === name);

    if (!item) {
      productList.push({ id, name, price, productQuantity });
      localStorage.setItem('productList', JSON.stringify(productList));
    } else {
      setProductQuantity(item.productQuantity);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuantity = (operation) => {
    if (operation === 'minus' && Number(productQuantity) >= 1) {
      setProductQuantity(Number(productQuantity) - 1);
      setTotalPrice((Number(totalPrice) - Number(price)).toFixed(2));
    }

    if (operation === 'plus') {
      setProductQuantity(Number(productQuantity) + 1);
      setTotalPrice((Number(totalPrice) + Number(price)).toFixed(2));
    }

    return Number(productQuantity);
  };

  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem('productList'));

    productList[index].productQuantity = productQuantity;

    localStorage.setItem('productList', JSON.stringify(productList));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productQuantity]);

  return (
    <div className="card">
      <img
        data-testid={ `${index}-product-img` }
        src={ urlImage }
        alt={ name }
        height="150px"
      />
      <div data-testid={ `${index}-product-name` }>{name}</div>
      <div data-testid={ `${index}-product-price` }>{parseCurrency(price)}</div>
      <div className="quantitycontainer">
        <button
          className="quantitybutton"
          type="button"
          data-testid={ `${index}-product-minus` }
          onClick={ () => handleQuantity('minus') }
        >
          -
        </button>
        <span
          className="quantityvalue"
          data-testid={ `${index}-product-qtd` }
          value={ productQuantity }
        >
          { productQuantity }
        </span>
        <button
          className="quantitybutton"
          type="button"
          data-testid={ `${index}-product-plus` }
          onClick={ () => handleQuantity('plus') }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  url_image: PropTypes.string,
}.isRequired;

export default ProductCard;
