const { body, param } = require('express-validator');
const { default: mongoose } = require('mongoose');

exports.createOrderValidation = () => {
  return [
    body('table')
      .notEmpty()
      .withMessage('Table number is required')
      .isString()
      .withMessage('Table must be a string')
      .isLength({ min: 2 })
      .withMessage('Table must be at least 2 characters long')
      .isLength({ max: 2 })
      .withMessage('Table must be at most 2 characters long')
      .trim()
      .escape(),

    body('items')
      .notEmpty()
      .withMessage('Items are required')
      .isArray()
      .withMessage('Items must be an array'),

    body('items.*.menuId')
      .notEmpty()
      .withMessage('Menu ID is required')
      .isString()
      .withMessage('Menu ID must be a string')
      .trim()
      .escape(),

    body('items.*.name')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name must be a string')
      .trim()
      .escape(),

    body('items.*.qty')
      .notEmpty()
      .withMessage('Quantity is required')
      .isInt({ min: 1 })
      .withMessage('Quantity must be a positive integer')
      .isInt({ max: 10 })
      .withMessage('Quantity must be at most 10'),

    body('items.*.price')
      .notEmpty()
      .withMessage('Price is required')
      .isNumeric()
      .withMessage('Price must be a number')
      .isInt({ min: 0 })
      .withMessage('Price must be a positive number'),

    body('notes')
      .optional()
      .isString()
      .withMessage('Notes must be a string')
      .trim()
      .escape(),

    body('status')
      .optional()
      .isString()
      .withMessage('Status must be a string')
      .trim()
      .escape(),
  ];
};

exports.updateOrderValidation = () => {
  return [
    param('id')
      .notEmpty()
      .withMessage('Order ID is required')
      .custom((value) => mongoose.Types.ObjectId.isValid(value))
      .withMessage('Invalid order ID'),
    body('status')
      .optional()
      .isString()
      .withMessage('Status must be a string')
      .trim()
      .escape(),
  ];
};

exports.deleteOrderValidation = () => {
  return [
    param('id')
      .notEmpty()
      .withMessage('Order ID is required')
      .custom((value) => mongoose.Types.ObjectId.isValid(value))
      .withMessage('Invalid order ID'),
  ];
};
