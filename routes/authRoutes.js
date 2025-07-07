const express = require("express");
const {
  registerUser,
  login,
  logout,
  verifyUser,
} = require("../controllers/authController");

const authRoutes = express.Router();

// Register route
authRoutes.post("/register", registerUser);

// Login router
authRoutes.post("/login", login);

// Logout route
authRoutes.post("/logout", logout);

// Verify user route
authRoutes.get("/verify", verifyUser);

module.exports = authRoutes;
