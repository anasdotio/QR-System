// src/routes/adminRoutes.js
const express = require("express");
const { loginAdmin } = require("../controllers/adminController");
const { getOrders, updateOrder } = require("../controllers/orderController");
const { verifyAdmin } = require("../middleware/auth"); // ⬅️ use verifyAdmin

const router = express.Router();

// Admin login
router.post("/login", loginAdmin);

// Admin gets all orders
router.get("/orders", verifyAdmin, getOrders);

// Admin updates an order status
router.put("/orders/:id", verifyAdmin, updateOrder);

module.exports = router;
