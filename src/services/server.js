const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product.js");

const app = express();

// Replace with your MongoDB connection string
const mongoUri =
  "mongodb+srv://Cluster73735:d1xFTGN+cVN8@cluster73735.ey7o6pg.mongodb.net"; // Or your Atlas connection string
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.post("/api/products", async (req, res) => {
  const { name, thumbnail, materialCost } = req.body;
  const product = new Product({ name, thumbnail, materialCost });
  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error saving product" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
