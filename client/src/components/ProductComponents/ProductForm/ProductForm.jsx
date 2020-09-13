import React, { useEffect } from 'react';
import Axios, { navigate } from 'axios';
import BASE_URL from '../../../constants';
import ProductFormView from './ProductFormView/ProductFormView';

const ProductForm = ({changePage}) => {
  const NEW_PRODUCT_URL = `${BASE_URL}/products`

  useEffect(() => {
    changePage('new-product');
  }, [changePage]);

  const handleSubmit = e => {
    e.preventDefault();

    const newProduct = {
      title: e.target['title'].value,
      price: e.target['price'].value,
      description: e.target['description'].value
    };

    Axios.post(NEW_PRODUCT_URL, newProduct)
      .then(res => navigate(`/products/${res.data.product._id}`))
      .catch(err => console.error(err));
  }

  return <ProductFormView handleSubmit={handleSubmit} />;
}

export default ProductForm;
