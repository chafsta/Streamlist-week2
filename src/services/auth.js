import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = 'ea38507d399a54f970e73ef8d13f340';
const API_BASE_URL = 'https://api.themoviedb.org/3';

function Movies() {
  const [movies, setMovies] = useState([]); // State to store movie data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch popular movies
    async function fetchMovies() {
      try {
        const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
          params: { api_key: API_KEY, language: 'en-US', page: 1 },
        });
        setMovies(response.data.results); // Update state with movie data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {loading && <p>Loading movies...</p>}
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
      );
}
export async function login(email, password) {
}
export default Movies;

