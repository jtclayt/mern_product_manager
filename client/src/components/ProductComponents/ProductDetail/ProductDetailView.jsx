import React from 'react';
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button';
import './ProductDetail.css';
import DeleteButton from '../../shared/DeleteButton/DeleteButton';

const ProductDetailView = ({product, handleDelete}) => {
  return (
    <article className="ProductDetail">
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to="update">
        <Button size="lg">Update</Button>
      </Link>
      <DeleteButton id={product._id} />
    </article>
  );
}

export default ProductDetailView;
