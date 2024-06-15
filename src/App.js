import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import SlidingMenu from "./components/SlidingMenu";
import { CartProvider } from "./services/CartContext";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartProvider>
      <Router>
        <SlidingMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className={`container ${isOpen ? "shifted" : ""}`}>
          <Header toggleMenu={toggleMenu} />
          <div className="content-wrapper">
            <main className="main-content" style={{ paddingTop: "5rem" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
