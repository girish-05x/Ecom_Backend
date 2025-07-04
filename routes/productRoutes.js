const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const validateProduct = require("../utils/validateProduct");
const { isAuthenticated, isAdmin } = require("../middlewares/authMiddlewares");
const productRoutes = express.Router();
productRoutes.post(
  "/",
  isAuthenticated,
  isAdmin,
  validateProduct,
  createProduct
);
productRoutes.get("/", isAuthenticated, getAllProducts);
productRoutes.get("/:id", isAuthenticated, getProductById);
productRoutes.put(
  "/:id",
  isAuthenticated,
  isAdmin,
  validateProduct,
  updateProduct
);
productRoutes.delete("/:id", isAuthenticated, isAdmin, deleteProduct);
module.exports = productRoutes;
