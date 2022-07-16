const express = require('express');

const userRouter = express.Router();

const fieldsValidator = require('../../middlewares/fieldsValidator');
const userController = require('../../controllers/userController');

userRouter.post('/', fieldsValidator.nameValidator,
fieldsValidator.emailValidator,
fieldsValidator.passwordValidator,
userController.createUser);

module.exports = userRouter;