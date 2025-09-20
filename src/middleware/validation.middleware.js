const { validationResult } = require('express-validator');
exports.validate = (req, res, next) => {
  const errors = [];

  const error = validationResult(req);

  if (error.isEmpty()) return next();

  error.array().forEach((err) => {
    errors.push({
      field: err.param,
      message: err.msg,
    });
  });

  return res.status(400).json({ errors });
};
