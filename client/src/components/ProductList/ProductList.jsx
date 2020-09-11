import React, { useEffect } from 'react';
import Axios from 'axios';
import BASE_URL from '../../constants';

const ProductList = ({changePage}) => {
  const PRODUCTS_URL = `${BASE_URL}/products`;

  useEffect(() => {
    changePage('products');
  }, [changePage]);

  useEffect(() => {
    Axios.get(PRODUCTS_URL)
      .then(res => console.log(res.data.products))
      .catch(err => console.error(err));
  })

  return <h1>Product List</h1>;
}

export default ProductList;
