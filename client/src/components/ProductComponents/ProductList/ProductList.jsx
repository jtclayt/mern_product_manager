import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import BASE_URL from '../../../constants';
import ProductListView from './ProductListView/ProductListView';


const ProductList = ({changePage}) => {
  const PRODUCTS_URL = `${BASE_URL}/products`;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    changePage('products');
  }, [changePage]);

  useEffect(() => {
    Axios.get(PRODUCTS_URL)
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, [PRODUCTS_URL])

  return <ProductListView products={products} />;
}

export default ProductList;
