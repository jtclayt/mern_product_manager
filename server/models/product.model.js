const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title required'],
      minlength: [2, 'Title must be 2 or more characters'],
      maxlength: [50, 'Title must be 50 or less characters']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be greater than 0']
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [5, 'Description must be 5 or more characters'],
      maxlength: [200, 'Description must be 200 or less characters']
    }
  },
  {timestamps: true}
);

const Product = new mongoose.model('Product', ProductSchema);
module.exports = Product;
