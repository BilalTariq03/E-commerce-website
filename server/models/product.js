const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  image: String,
  category: String,
  subCategory: String
});

module.exports = mongoose.model("Product", ProductSchema);