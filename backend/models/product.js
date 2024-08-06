const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  product_category: {
    type: String,
    required: true,
  },
  product_specfication: {
    type: Object,
    required: true,
  },
  product_image: {
    type: Array,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_feature: {
    type: Array,
    required: true,
  },
  product_review: {
    type: Array,
    required: false,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
