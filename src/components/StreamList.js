// src/components/StreamList.js
import React, { useState } from 'react';
import './styles/StreamList.css';

const StreamList = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <h1>StreamList Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StreamList;

