import React, { useState } from 'react';
import {signUp as signUpService} from '../services/auth.js';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
        const response = await signUpService(email, password);
        console.log('Account created:', response);
      } catch (error) {
        console.error('Error creating account:', error);
      }
    };
    return (
    
 
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
      </form>
    );
  };
  
  export default SignUp;