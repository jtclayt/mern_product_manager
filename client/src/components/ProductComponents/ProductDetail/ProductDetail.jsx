import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import BASE_URL from '../../../constants';
import ProductDetailView from './ProductDetailView/ProductDetailView';

const ProductDetail = ({id}) => {
  const PRODUCT_URL = `${BASE_URL}/products/${id}`;
  const [product, setProduct] = useState({});

  useEffect(() => {
    Axios.get(PRODUCT_URL)
      .then(res => {
        console.log(res.data)
        setProduct(res.data.product)
      })
      .catch(err => console.error(err));
  }, [PRODUCT_URL]);

  return <ProductDetailView product={product} />;
}

export default ProductDetail;
