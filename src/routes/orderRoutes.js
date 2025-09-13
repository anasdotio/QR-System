const express = require("express");
const router = express.Router();
const { verifyAdmin } = require("../middleware/auth");
const orderController = require("../controllers/orderController");

// Get all orders (admin only)
router.get("/", verifyAdmin, orderController.getOrders);

// Create new order (public — when user places an order)
router.post("/", orderController.createOrder);

// Update order status (admin only)
router.put("/:id", verifyAdmin, orderController.updateOrder);

module.exports = router;
