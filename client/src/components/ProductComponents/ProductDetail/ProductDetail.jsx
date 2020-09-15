import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import BASE_URL from '../../../constants';
import ProductDetailView from './ProductDetailView';

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

  return <ProductDetailView product={product} />;
}

export default ProductDetail;
