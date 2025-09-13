// src/controllers/orderController.js

const Order = require("../models/order");

// Get all orders (admin only)
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.menuId"); // ✅ correct field
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err.message);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// Create new order
const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: "Error creating order" });
  }
};

// Update order status
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: "Error updating order" });
  }
};

module.exports = { getOrders, createOrder, updateOrder };
