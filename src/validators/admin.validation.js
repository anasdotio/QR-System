const { body } = require('express-validator');

exports.loginAdminValidation = () => {
  return [
    body('username')
      .notEmpty()
      .withMessage('Username is required')
      .isString()
      .withMessage('Username must be a string')
      .trim()
      .escape(),
    body('password')
      .notEmpty()
      .withMessage('Password is required')
      .trim()
      .escape(),
  ];
};
