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
  },

  updateProduct: (req, res) => {
    Product.updateOne({_id: req.params.id}, req.body, {new: true})
      .then(updatedProduct => res.json({product: updatedProduct}))
      .catch(err => res.json({message: 'Something went wrong', error: err}));
  },

  deleteProduct: (req, res) => {
    Product.remove({_id: req.params.id})
      .then(result => res.json({message: "Successfully deleted product", result: result}))
      .catch(err => res.json({message: 'Something went wrong', error: err}));
  }
}
