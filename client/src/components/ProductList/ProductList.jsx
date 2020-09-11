import React, { useEffect } from 'react';

const ProductList = ({changePage}) => {
  useEffect(() => {
    changePage('products');
  }, [changePage]);

  return <h1>Product List</h1>;
}

export default ProductList;
