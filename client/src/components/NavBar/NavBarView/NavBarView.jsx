import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBarView = props => {
  return (
    <Navbar className="NavBar" bg="primary" variant="dark">
      <Navbar.Brand className="brand" href="/products">Product Manager</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link id="products" className="link" href="/products">
          Products
        </Nav.Link>
        <Nav.Link id="new-product" className="link" href="/products/new">
          New Product
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBarView;
