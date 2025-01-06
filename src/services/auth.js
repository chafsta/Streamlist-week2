import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=ea385c07d399a54f970e73ef8d13f340';
const API_KEY = "ea38507d399a54f970e73ef8d13f340" 

export const signUp = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, { email, password }, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password }, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const createSession = async (requestToken) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/authentication/session/new`, {
      request_token: requestToken,
    }, {
      params: { api_key: API_KEY },
    });
    return response.data.session_id;
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
};

export const logout = async (sessionId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/authentication/session`, {
      params: { api_key: API_KEY },
      data: { session_id: sessionId },
    });
    return response.data;
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
