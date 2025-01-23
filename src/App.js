import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StreamList from "./components/StreamList.js";
import Movies from "./components/Movies.js";
import Cart from "./components/Cart.js";
import About from "./components/About.js";
import Login from "./components/Login.js";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const adjustQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeMovieFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul>
          <li>
            <Link className="nav-link" to="/streamlist">
              StreamList
            </Link>
          </li>
          <li>
            <Link className="Navigation" to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Layout */}
      <div className="app-container">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <div className="search-bar">
            <input type="text" placeholder="Search for a movie..." />
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/streamlist" element={<StreamList />} />
            <Route path="/movies" element={<Movies addMovieToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cartItems}
                  adjustQuantity={adjustQuantity}
                  removeMovieFromCart={removeMovieFromCart}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <Login />
        </div>
      </div>
    </Router>
  );
}

export default App;