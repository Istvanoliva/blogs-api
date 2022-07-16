const express = require('express');

const userRouter = express.Router();

const fieldsValidator = require('../../middlewares/fieldsValidator');
const userController = require('../../controllers/userController');
const tokenValidator = require('../../middlewares/tokenValidator');

userRouter.post('/', fieldsValidator.nameValidator,
fieldsValidator.emailValidator,
fieldsValidator.passwordValidator,
userController.createUser);

userRouter.get('/', tokenValidator, userController.getAllUsers);

module.exports = userRouter;