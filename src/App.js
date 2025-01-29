import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import StreamList from "./components/StreamList.js";
import Movies from "./components/Movies.js";
import Cart from "./components/Cart.js";
import About from "./components/About.js";
import Login from "./components/Login.js";
import CreditCard from "./components/CreditCard.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import './components/styles/StreamList.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setIsLoggedIn(!!authToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };

  return (
    <ErrorBoundary>
      <Router>
        {/* Top Navigation Bar */}
        <nav className="top-nav">
          <Link to="/streamlist">StreamList</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/streamlist" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
            <Route path="/credit-card" element={<ProtectedRoute element={<CreditCard />} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/streamlist" /> : <Login />}
            />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
