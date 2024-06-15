import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineAppstore,
  AiOutlinePicture,
} from "react-icons/ai";
import "./SlidingMenu.css"; // Import the CSS file for styling

const SlidingMenu = ({ isOpen, toggleMenu }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`menu-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
      <div className={`sliding-menu ${isOpen ? "open" : ""}`}>
        <img
          src={`${process.env.PUBLIC_URL}/placeholder.png`}
          alt="Placeholder"
          className="menu-image"
        />
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                <AiOutlineHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                <AiOutlineInfoCircle /> About
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu}>
                <AiOutlineAppstore /> Products
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={toggleMenu}>
                <AiOutlinePicture /> Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SlidingMenu;
