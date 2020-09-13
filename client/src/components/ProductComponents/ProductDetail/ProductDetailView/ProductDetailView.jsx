import React from 'react';
import './ProductDetail.css';

const ProductDetailView = ({product}) => {
  return (
    <article className="ProductDetail">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </article>
  );
}

export default ProductDetailView;
