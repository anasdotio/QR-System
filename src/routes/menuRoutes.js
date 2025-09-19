const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../middleware/auth'); // JWT middleware
const Menu = require('../models/menu');

// Public - customers can see menu
router.get('/', async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Protected - only admin can add item
router.post('/', verifyAdmin, async (req, res) => {
  try {
    const newItem = new Menu(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
