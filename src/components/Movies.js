// src/components/Movies.js

import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ addMovieToCart }) => {
  const movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', price: 12.99 },
    { id: 2, title: 'The Dark Knight', genre: 'Action', price: 14.99 },
    { id: 3, title: 'Interstellar', genre: 'Sci-Fi', price: 13.99 },
  ];

  return (
    <div>
      <h1>Streamlist - Movie Selection</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', width: '200px', backgroundColor: '#f9f9f9' }}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Price: ${movie.price}</p>
            <button
              style={{ backgroundColor: '#007bff', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              onClick={() => addMovieToCart(movie)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

// Export the Movies component
export default Movies;