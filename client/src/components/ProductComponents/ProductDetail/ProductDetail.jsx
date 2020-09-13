import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import BASE_URL from '../../../constants';

const ProductDetail = ({id}) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    Axios.get(`${BASE_URL}/products/${id}`)
      .then(res => setProduct(res.data.product))
      .catch(err => console.error(err));
  });

  return <ProductDetailView product={product} />;
}

export default ProductDetail;
