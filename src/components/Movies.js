import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = ({ addMovieToCart }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=ea385c07d399a54f970e73ef8d13f340"
        );
        setPopularMovies(response.data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setLoading(false);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : popularMovies.length === 0 ? (
        <p>No popular movies available at the moment.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
          }}
        >
          {popularMovies.map((movie) => (
            <div
              key={movie.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                width: "200px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  addMovieToCart({
                    id: movie.id,
                    title: movie.title,
                    price: 14.99, // Example price
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
