// src/routes/orderRoutes.js
const express = require('express');
const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');
const { verifyAdmin } = require('../middleware/auth');

const router = express.Router();

// User creates an order
router.post('/', createOrder);
router.get('/', verifyAdmin, getOrders);
router.patch('/:id', verifyAdmin, updateOrder);
router.delete('/:id', verifyAdmin, deleteOrder);

module.exports = router;
