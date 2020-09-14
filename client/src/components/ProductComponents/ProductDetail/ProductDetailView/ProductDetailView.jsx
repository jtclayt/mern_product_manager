import React from 'react';
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button';
import './ProductDetail.css';

const ProductDetailView = ({product, handleDelete}) => {
  return (
    <article className="ProductDetail">
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to="update">
        <Button size="lg">Update</Button>
      </Link>
      <Button onClick={handleDelete} size="lg" variant="danger">Delete</Button>
    </article>
  );
}

export default ProductDetailView;
