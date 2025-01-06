import React, { createContext, useContext, useState } from 'react';
import { fetchMovies } from '../services/api.js';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState({});

  const loadMovies = async (category, fetchUrl) => {
    const data = await fetchMovies(fetchUrl);
    setMovies((prev) => ({ ...prev, [category]: data.results }));
  };

  return (
    <MovieContext.Provider value={{ movies, loadMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
