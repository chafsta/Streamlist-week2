import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=ea385c07d399a54f970e73ef8d13f340';
const API_KEY = 'ea385c07d399a54f970e73ef8d13f340';        
export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results; 
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export default fetchMovies;
