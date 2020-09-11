import React, { useEffect } from 'react';

const ProductForm = ({changePage}) => {
  useEffect(() => {
    changePage('new-product');
  }, [changePage]);

  return <h1>Product Form</h1>;
}

export default ProductForm;
