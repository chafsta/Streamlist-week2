import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './styles/StreamList.css';
import Movies from './Movies.js';

const StreamList = ({ darkMode }) => {
  const themeStyles = {
    backgroundColor: darkMode ? '#1e1e1e' : '#f5f5f5',
    color: darkMode ? '#ffffff' : '#000000',
  };

  const [streams, setStreams] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addMovieToCart = (movie) => {
    setCart((prevCart) => [...prevCart, movie]);
  };

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=ea385c07d399a54f970e73ef8d13f340'
        );
        setStreams(response.data.results || []);
      } catch (error) {
        console.error('Error fetching streams:', error);
      }
    };
    fetchStreams();
  }, []);

  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setEvents([...events, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="stream-list" style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/movies">Movies</Link> |{' '}
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div style={{ ...themeStyles }}>
              <h1>Popular Movie List</h1>
              <form onSubmit={handleEventSubmit}>
                <input
                  type="text"
                  value={inputValue}
                  placeholder="Enter event"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Add Event</button>
              </form>
              <ul>
                {events.map((evt, index) => (
                  <li key={index}>{evt}</li>
                ))}
              </ul>
              <ul>
                {streams.length > 0 ? (
                  streams.map((stream) => <li key={stream.id}>{stream.title}</li>)
                ) : (
                  <li>No streams available</li>
                )}
              </ul>
            </div>
          }
        />
        <Route path="/movies" element={<Movies addToCart={addMovieToCart} />} />
        <Route
          path="/cart"
          element={
            <div>
              <h1>Your Cart</h1>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul>
                  {cart.map((movie, index) => (
                    <li key={index}>{movie.title}</li>
                  ))}
                </ul>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default StreamList;
