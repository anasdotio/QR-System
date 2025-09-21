// src/controllers/orderController.js

const order = require('../models/order');
const Order = require('../models/order');

// Get all orders (admin only)
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().lean().sort({ createdAt: -1 }); // ✅ correct field

    if (!orders) {
      return res.status(404).json({ message: 'No orders found' });
    }

    const ordersWithTotal = orders.map((order) => {
      const totalPrice = order.items.reduce((sum, item) => {
        return sum + item.price * item.qty;
      }, 0);

      return { ...order, totalPrice };
    });

    res.json(ordersWithTotal);
  } catch (err) {
    console.error('Error fetching orders:', err.message);
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

// Create new order
const createOrder = async (req, res) => {
  try {
    const { table, items } = req.body;

    const newOrder = await Order.create({ table, items });
    res.status(201).json(newOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error creating order' });
  }
};

// Update order status
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status: req.body.status },
      { new: true },
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error updating order' });
  }
};

// Delete Order by ID
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting order' });
  }
};

module.exports = { getOrders, createOrder, updateOrder, deleteOrder };
