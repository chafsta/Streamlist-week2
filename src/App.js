import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import StreamList from './components/StreamList.js';
import Movies from './components/Movies.js';
import MovieDetails from './components/MovieDetails.js';
import Cart from './components/Cart.js';
import About from './components/About.js';
import Login from './components/Login.js';
import './App.css';

function App() {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Adjust item quantity
  const adjustQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Remove item from cart
  const removeMovieFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      {/* Single Navigation Bar */}
      <nav className="nav-bar">
        <ul>
          <li><Link className="nav-link" to="/streamlist">StreamList</Link></li>
          <li><Link className="nav-link" to="/movies">Movies</Link></li>
          <li><Link className="nav-link" to="/cart">Cart</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="app-container">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <div className="auth-section">
            <Login />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        {/* Routes */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/streamlist" element={<StreamList />} />
            <Route path="/movies" element={<Movies addMovieToCart={addToCart} />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
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
      </div>
    </Router>
  );
}

export default App;
