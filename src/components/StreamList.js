import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/StreamList.css';

const StreamList = ({ darkMode, toggleTheme }) => {
  const [streams, setStreams] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [events, setEvents] = useState([]);

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
    setEvents([...events, inputValue]);
    setInputValue('');
  };

  console.log('Rendering StreamList with darkMode:', darkMode);

  return (
    <div className="stream-list" style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
      <h1>Stream List</h1>
      <ul>
        {streams && streams.length > 0 ? (
          streams.map((stream) => <li key={stream.id}>{stream.title}</li>)
        ) : (
          <li>No streams available</li>
        )}
      </ul>
    </div>
  );
};

export default StreamList;
