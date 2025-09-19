const Menu = require('../models/menu');

exports.getMenu = async (req, res) => {
  try {
    const items = await Menu.find({ available: true }).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMenuItem = async (req, res) => {
  try {
    const { name, price, category, description, image, available } = req.body;
    const item = new Menu({
      name,
      price,
      category,
      description,
      image,
      available,
    });
    await item.save();
    res.json({ msg: 'Menu item created', item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
