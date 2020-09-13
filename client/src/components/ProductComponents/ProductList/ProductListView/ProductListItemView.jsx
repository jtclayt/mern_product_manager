import React from 'react';
import Link from '@reach/router';
import './ProductList.css';

const ProductListItemView = ({product}) => {
  return (
    <li className="ProductListItem">
      <Link path={`/products/${product._id}`}>{ product.title }</Link>
    </li>
  );
}

export default ProductListItemView;