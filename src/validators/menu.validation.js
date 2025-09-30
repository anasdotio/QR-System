const { body } = require('express-validator');

exports.menuValidation = () => {
  return [
    body('name')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name must be a string')
      .isLength({ min: 6 })
      .withMessage('Name must be at least 6 characters long')
      .isLength({ max: 40 })
      .withMessage('Name must be at most 40 characters long')
      .trim()
      .escape(),

    body('category')
      .notEmpty()
      .withMessage('Category is required')
      .isString()
      .withMessage('Category must be a string')
      .isLength({ max: 20 })
      .withMessage('Category must be at most 20 characters long')
      .trim()
      .escape(),

    body('description')
      .notEmpty()
      .withMessage('Description is required')
      .isString()
      .withMessage('Description must be a string')
      .isLength({ max: 100 })
      .withMessage('Description must be at most 100 characters long')
      .trim()
      .escape(),
  ];
};
