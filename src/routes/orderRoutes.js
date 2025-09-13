// src/routes/orderRoutes.js
const express = require("express");
const { createOrder } = require("../controllers/orderController");

const router = express.Router();

// User creates an order
router.post("/", createOrder);

module.exports = router;
