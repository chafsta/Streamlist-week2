import React, { useState } from 'react';
import './Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in...');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      console.log('Logged in with email:', email, 'password:', password);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form className="login-section" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  )}
}
export default Login;
