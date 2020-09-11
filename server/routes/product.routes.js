const ProductController = require('../controllers/product.controller');

const ProductRoutes = app => {
  app.get('/api/products', ProductController.allProducts);
  app.post('/api/products', ProductController.createProduct);
}

module.exports = ProductRoutes;
