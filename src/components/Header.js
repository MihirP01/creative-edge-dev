import React, { useState, useEffect } from "react";
import { FaBars, FaShoppingBasket, FaTimes } from "react-icons/fa";
import { useCart } from "../services/CartContext";
import "./Header.css";

const Header = ({ toggleMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { cart, updateQuantity, removeFromCart } = useCart();
  const hasItemsInCart = cart.length > 0;

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setDropdownOpen(false);
        setIsClosing(false);
      }, 500); // Match the animation duration
    } else {
      setDropdownOpen(true);
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDropdownOpen && !isClosing) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [isDropdownOpen, isClosing]);

  return (
    <>
      <header className="header">
        <button className="menu-button" onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className="header-content">
          <h1>Your Website</h1>
        </div>
        <button className="basket-icon" onClick={toggleDropdown}>
          <FaShoppingBasket />
          {hasItemsInCart && <span className="cart-indicator"></span>}
        </button>
      </header>
      {isDropdownOpen && (
        <div className={`dropdown-overlay ${isClosing ? "closing" : ""}`}>
          <div className="dropdown-content">
            <div className="dropdown-content-lock">
              <h1>Shopping Cart</h1>
              <button className="close-button" onClick={toggleDropdown}>
                <FaTimes />
              </button>
            </div>
            {hasItemsInCart ? (
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="dropdown-cart-item">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="dropdown-cart-thumbnail"
                    />
                    <span className="dropdown-cart-item-name">{item.name}</span>
                    <div className="dropdown-cart-details">
                      <div className="cart-quantity">
                        <label>Qty:</label>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item._id, parseInt(e.target.value))
                          }
                          min="1"
                          max="10"
                        />
                      </div>
                    </div>
                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
