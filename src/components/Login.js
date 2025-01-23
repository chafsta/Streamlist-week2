import React, { useState } from "react";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleRegister = () => setIsRegistering(!isRegistering);

  return (
    <div className="login-container">
      {isRegistering ? (
        <div>
          <h2>Register</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Register</button>
          <p>
            Already have an account?{" "}
            <button onClick={toggleRegister} className="link-button">
              Login
            </button>
          </p>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <p>
            No account?{" "}
            <button onClick={toggleRegister} className="link-button">
              Register
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;

