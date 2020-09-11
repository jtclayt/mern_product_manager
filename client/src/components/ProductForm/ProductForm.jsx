import React, { useEffect } from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import Axios from 'axios'
import BASE_URL from '../../constants';
import './ProductForm.css'

const ProductForm = ({changePage}) => {
  const NEW_PRODUCT_URL = `${BASE_URL}/products`

  useEffect(() => {
    changePage('new-product');
  }, [changePage]);

  const handleSubmit = e => {
    e.preventDefault();

    const newProduct = {
      title: e.target['title'].value,
      price: e.target['price'].value,
      description: e.target['description'].value
    };

    Axios.post(NEW_PRODUCT_URL, newProduct)
      .then(res => console.log(res.data.product))
      .catch(err => console.error(err));
  }

  return (
    <Row className="ProductForm">
      <Col md={4}>
        <Form onSubmit={handleSubmit} className="Form">
          <h2>Create a New Product</h2>

          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              as="input"
              name="title"
              type="text"
              minLength="2"
              maxLength="50"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              as="input"
              name="price"
              type="number"
              step="0.01"
              min="0"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              minLength="5"
              maxLength="200"
              required
            />
          </Form.Group>

          <Button type="submit" className="btn">Add Product</Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ProductForm;
