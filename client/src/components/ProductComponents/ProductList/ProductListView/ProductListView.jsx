import React from 'react';
import ProductListItemView from './ProductListItemView';
import './ProductList.css';

const ProductListView = ({products}) => {
  return (
    <section className="ProductList">
      <h1>All Products</h1>
      <ul>
        {
          products.map((product, i) => {
            <ProductListItemView key={i} product={product} />
          })
        }
      </ul>
    </section>
  );
}

export default ProductListView;
