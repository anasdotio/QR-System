// src/routes/orderRoutes.js
const express = require('express');
const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');
const { verifyAdmin } = require('../middleware/auth');
const {
  updateOrderValidation,
  deleteOrderValidation,
} = require('../validators/order.validation');
const { validate } = require('../middleware/validation.middleware');

const router = express.Router();

// User creates an order
router.post('/', createOrder);
router.get('/', verifyAdmin, getOrders);
router.patch(
  '/:id',
  verifyAdmin,
  updateOrderValidation(),
  validate,
  updateOrder,
);
router.delete(
  '/:id',
  verifyAdmin,
  deleteOrderValidation(),
  validate,
  deleteOrder,
);

module.exports = router;
