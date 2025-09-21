const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../middleware/auth'); // JWT middleware

const multer = require('multer');
const { createMenuItem, getMenu } = require('../controllers/menuController');
const { menuValidation } = require('../validators/menu.validation');
const { validate } = require('../middleware/validation.middleware');

const upload = multer({ storage: multer.memoryStorage() });

// Protected - only admin can add item
router.post(
  '/',
  verifyAdmin,
  upload.single('itemImage'),
  menuValidation(),
  validate,
  createMenuItem,
);
router.get('/', getMenu);

module.exports = router;
