// External Modules
const Express = require('express');

const Router = Express.Router();
const { body, validationResult } = require('express-validator');

// Controllers
const loginController = require('../controllers/login');

// Utils
const { errors } = require('../utils/errors');
const responseUtils = require('../utils/response');
const statusCodes = require('../utils/statusCodes');

Router.post('/', [
  body('email').exists().isEmail(),
  body('password').exists().isLength({ min: 8 }),
], (req, res) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    responseUtils.respond(res, statusCodes.BAD_REQUEST, errors.INVALID_OR_MISSING_PARAMETERS.reason);
    return;
  }

  const { email, password } = req.body;

  loginController
    .validate(email, password)
    .then((response) => {
      console.log(`Successfully logged In ${response}`);
      responseUtils.respond(res, statusCodes.SUCCESS);
    })
    .catch((err) => {
      responseUtils.respond(res, err.code, err.reason);
    });
});

module.exports = Router;
