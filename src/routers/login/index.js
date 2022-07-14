const express = require('express');

const loginRouter = express.Router();

const fieldsValidator = require('../../middlewares/fieldsValidator');
const userController = require('../../controllers/userController');

loginRouter.post('/', fieldsValidator.isFilled, userController.login);

module.exports = loginRouter;