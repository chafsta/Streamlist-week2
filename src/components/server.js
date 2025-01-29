require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Allow requests from frontend
app.use(
  cors({JWT_SECRET=your_super_secret_key,
    origin: "http://localhost:3000", // Your frontend URL
    credentials: true, // Allow cookies
  })
);

// Dummy User Login Endpoint
app.post("/login", (req, res) => {
  const { token } = req.body; // OAuth Token from frontend

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  // Generate a JWT Token (store OAuth token securely)
  const accessToken = jwt.sign({ token }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  // Set the token as a secure HTTP-only cookie
  res.cookie("authToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure flag in production
    sameSite: "Strict",
    maxAge: 3600000, // 1 hour
  });

  res.json({ message: "Login successful" });
});

// Logout: Clear the authToken cookie
app.post("/logout", (req, res) => {
  res.clearCookie("authToken");
  res.json({ message: "Logged out" });
});

// Protected Route Example
app.get("/dashboard", (req, res) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  res.json({ message: "Welcome to the dashboard!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

