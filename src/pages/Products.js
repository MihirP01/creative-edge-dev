import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../services/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="product-thumbnail"
            />
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <FaShoppingBasket
                className="add-to-basket"
                onClick={() => addToCart(product)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
