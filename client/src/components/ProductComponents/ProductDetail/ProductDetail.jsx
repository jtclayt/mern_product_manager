import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import BASE_URL from '../../../constants';
import ProductDetailView from './ProductDetailView/ProductDetailView';

const ProductDetail = ({changePage, id}) => {
  const PRODUCT_URL = `${BASE_URL}/products/${id}`;
  const [product, setProduct] = useState({});

  useEffect(() => {
    changePage('product');
    Axios.get(PRODUCT_URL)
      .then(res => {
        setProduct(res.data.product)
      })
      .catch(err => console.error(err));
  }, [PRODUCT_URL, changePage]);

  const handleDelete = () => {
    Axios.delete(PRODUCT_URL)
      .then(res => navigate('/products'))
      .catch(err => console.error(err));
  }

  return <ProductDetailView handleDelete={handleDelete} product={product} />;
}

export default ProductDetail;
