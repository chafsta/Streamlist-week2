import React from "react";
import "./styles/StreamList.css"; // Import your CSS file

const StreamList = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
      {/* Left Sidebar */}
      <div style={{ width: "20%", padding: "10px", backgroundColor: "#f4f4f4" }}>
        <h3>Quick Links</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <a href="https://news.google.com" target="_blank" rel="noopener noreferrer">
              Google News
            </a>
          </li>
          <li>
            <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">
              Google Icons
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
              Twitch
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
              MDN Web Docs
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
              Stack Overflow
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
              CodePen
            </a>
          </li>
          <li>
            <a href="https://dev.to" target="_blank" rel="noopener noreferrer">
              Dev.to
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="stream-list">
        <h1>Welcome to StreamList</h1>
        <p>This is the main page of StreamList.</p>
      </div>

      {/* Right Sidebar (Login/Register Section) */}
      <div style={{ width: "20%", padding: "10px", backgroundColor: "#f9f9f9" }}>
        <h3>Login</h3>
        <form>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default StreamList;

