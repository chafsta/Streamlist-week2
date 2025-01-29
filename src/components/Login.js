import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status via HTTP-only cookies
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/check-auth", {
          method: "GET",
          credentials: "include", // Include cookies
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user); // Set authenticated user
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuthStatus();
  }, [navigate]);

  // Toggle between login and register views
  const toggleRegister = () => setIsRegistering(!isRegistering);

  // Handle Google Login success
  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Allows cookies to be sent
        body: JSON.stringify({ token: credentialResponse.credential }),
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user); // Save user info in state
        navigate("/dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Handle Google Login error
  const handleLoginError = (error) => {
    console.error("Google Login Error:", error);
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null); // Clear user state
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="auth-section">
      <div className="login-container">
        {isRegistering ? (
          <div className="register-box">
            <h2>Register</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Register</button>
            </form>
            <p>
              Already have an account?{" "}
              <button onClick={toggleRegister} className="link-button">
                Login
              </button>
            </p>
          </div>
        ) : (
          <div className="login-box">
            <h1>Login to Movie Streaming App</h1>
            {!user ? (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
              />
            ) : (
              <div>
                <p>Welcome, {user.name}!</p>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            )}
            <p>
              Don’t have an account?{" "}
              <button onClick={toggleRegister} className="link-button">
                Register
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

