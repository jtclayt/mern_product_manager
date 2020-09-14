import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import BASE_URL from '../../../constants';
import ProductFormView from './ProductFormView/ProductFormView';

const ProductForm = ({changePage, id}) => {
  const NEW_PRODUCT_URL = `${BASE_URL}/products`;
  const UPDATE_PRODUCT_URL = `${BASE_URL}/products/${id}`;
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      changePage('update-product');
      Axios.get(UPDATE_PRODUCT_URL)
        .then(res => setProduct(res.data.product))
        .catch(err => console.error(err));
    } else {
      changePage('new-product');
    }
  }, [UPDATE_PRODUCT_URL, changePage, id]);

  const handleSubmit = e => {
    e.preventDefault();

    const newProductInfo = {
      title: e.target['title'].value,
      price: e.target['price'].value,
      description: e.target['description'].value
    };

    if (id) {
      Axios.put(UPDATE_PRODUCT_URL, newProductInfo)
        .then(res => navigate(`/products/${id}`))
        .catch(err => console.log(err));
    } else {
      Axios.post(NEW_PRODUCT_URL, newProductInfo)
        .then(res => navigate(`/products/${res.data.product._id}`))
        .catch(err => console.log(err));
    }
  }

  return <ProductFormView product={product} handleSubmit={handleSubmit} />;
}

export default ProductForm;
