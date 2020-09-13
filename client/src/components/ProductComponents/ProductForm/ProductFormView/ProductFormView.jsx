import React from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import './ProductForm.css'

const ProductFormView = ({handleSubmit}) => {
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

export default ProductFormView;
