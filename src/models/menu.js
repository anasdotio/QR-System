const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, default: "" },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Menu", menuSchema);
