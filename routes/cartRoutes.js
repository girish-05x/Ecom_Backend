const express = require("express");
const {
  updateQuantity,
  addToCart,
  clearCart,
  removeProduct,
  getCart,
} = require("../controllers/cartController");
const { isAuthenticated } = require("../middlewares/authMiddlewares");

const cartRoutes = express.Router();

cartRoutes.get("/", isAuthenticated, getCart);

cartRoutes.post("/add", isAuthenticated, addToCart);
cartRoutes.put("/", isAuthenticated, updateQuantity);
cartRoutes.delete("/:product", isAuthenticated, removeProduct);
cartRoutes.delete("/", isAuthenticated, clearCart);

module.exports = cartRoutes;
