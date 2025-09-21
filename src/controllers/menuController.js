const Menu = require('../models/menu');
const uploadImage = require('../services/storage.service');
const { v4: uuid } = require('uuid');

exports.getMenu = async (req, res) => {
  try {
    const items = await Menu.find({ available: true }).sort({ createdAt: -1 });
    if (!items && !items.length)
      return res.status(404).json({ msg: 'No items found' });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMenuItem = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    const isAlreadyExists = await Menu.findOne({ name });

    if (isAlreadyExists)
      return res.status(400).json({ msg: 'Menu item is already available' });

    const url = await uploadImage(req.file.buffer, uuid());

    if (!url) return res.status(400).json({ msg: 'Error uploading image' });

    const item = await Menu.create({
      name,
      price,
      category,
      description,
      image: url,
    });
    res.json({ msg: 'Menu item created', item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
