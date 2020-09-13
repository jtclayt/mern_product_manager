const Product = require('../models/product.model');

module.exports = {
  allProducts: (req, res) => {
    Product.find()
      .then(products => res.json({products: products}))
      .catch(err => res.json({message: 'Something went wrong', error: err}));
  },

  createProduct: (req, res) => {
    Product.create(req.body)
      .then(newProduct => res.json({product: newProduct}))
      .catch(err => res.json({message: 'Something went wrong', error: err}));
  },

  oneProduct: (req, res) => {
    Product.findOne({_id: req.params.id})
      .then(product => res.json({product: product}))
      .catch(err => res.json({message: 'Something went wrong', error: err}));
  }
}
