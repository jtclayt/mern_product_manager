import React from 'react';
import { Link } from '@reach/router';
import './ProductList.css';
import DeleteButton from '../../shared/DeleteButton/DeleteButton';

const ProductListItemView = ({product}) => {
  return (
    <li className="ProductListItem">
      <Link to={`/products/${product._id}`}>{ product.title }</Link>
      <DeleteButton id={product._id} />
    </li>
  );
}

export default ProductListItemView;