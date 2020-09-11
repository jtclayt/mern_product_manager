import React, {useState} from 'react';
import { Router } from '@reach/router';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import ProductForm from './components/ProductForm/ProductForm';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("index")

  const changePage = newPage => {
    setCurrentPage(newPage);
  }

  return (
    <div className="App">
      <NavBar currentPage={currentPage} />
      <Router className="container">
        <ProductList path="/products" changePage={changePage} />
        <ProductForm path="/products/new" changePage={changePage} />
      </Router>
    </div>
  );
}

export default App;
