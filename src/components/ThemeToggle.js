import React from 'react';
import './styles/ThemeToggle.css';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
