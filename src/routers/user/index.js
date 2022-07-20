const express = require('express');

const userRouter = express.Router();

const fieldsValidator = require('../../middlewares/fieldsValidator');
const userController = require('../../controllers/userController');
const jwtMiddleware = require('../../middlewares/jwtMiddleware');

userRouter.post('/', fieldsValidator.nameValidator,
fieldsValidator.emailValidator,
fieldsValidator.passwordValidator,
userController.createUser);

userRouter.get('/', jwtMiddleware.tokenValidator, userController.getAllUsers);

userRouter.get('/:id', jwtMiddleware.tokenValidator, userController.findUser);

module.exports = userRouter;