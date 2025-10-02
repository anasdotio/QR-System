const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  menuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu',
    required: true,
  },
  name: String,
  qty: Number,
  price: Number,
});

const orderSchema = new mongoose.Schema(
  {
    table: { type: String, required: true },
    items: [itemSchema],
    status: {
      type: String,
      enum: ['pending', 'preparing', 'served'],
      default: 'pending',
    },
    notes: { type: String, default: '' },
    total: { type: Number },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Order', orderSchema);
