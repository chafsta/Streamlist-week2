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

  // Declare a function for the form’s onSubmit
  const handleEventSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, inputValue]);
    setInputValue('');
  };

  console.log('Rendering StreamList with darkMode:', darkMode);

  return (
    <div
      className="stream-list"
      style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}
    >
      <h1>Popular Movie List</h1>

      {/* Example form to add events */}
      <form onSubmit={handleEventSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter event"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>

      {/* Display any events you’ve added */}
      <ul>
        {events.map((evt, index) => (
          <li key={index}>{evt}</li>
        ))}
      </ul>

      {/* Display popular movies */}
      <ul>
        {streams && streams.length > 0 ? (
          streams.map((stream) => (
            <li key={stream.id}>{stream.title}</li>
          ))
        ) : (
          <li>No streams available</li>
        )}
      </ul>
    </div>
  );
};

export default StreamList;
