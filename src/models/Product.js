const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  thumbnail: String,
  materialCost: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
