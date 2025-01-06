
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '.my-react-app/src/components/Navigation';
import { Movies }  from  './src/components/Movies';
import { Cart } from './src/components/Cart';
import { About }  from './src/components/About';
import { fetchMovies } from './src/components/services/api';
import { fetchUrls } from './src/components/fetchUrls';
import React, { useEffect } from 'react';
import { useMovies } from '../context/MovieContext';


const Category = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]); 
  
  useEffect(() => {
    fetchMovies(fetchUrl).then((data) => setMovies(data.results));
  }, [fetchUrl]);

  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="category-movies">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Category title="Trending Now" fetchUrl={fetchUrls.trending} />
              <Category title="Top Rated" fetchUrl={fetchUrls.topRated} />
              <Category title="Action Movies" fetchUrl={fetchUrls.action} />
              <Category title="Comedy Movies" fetchUrl={fetchUrls.comedy} />
            </div>
          }
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
const Category = ({ title, category, fetchUrl }) => {
  const { movies, loadMovies } = useMovies();

  useEffect(() => {
    loadMovies(category, fetchUrl);
  }, [category, fetchUrl, loadMovies]);

  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="category-movies">
        {movies[category]?.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;