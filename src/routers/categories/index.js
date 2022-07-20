const express = require('express');

const categoriesRouter = express.Router();

const jwtMiddleware = require('../../middlewares/jwtMiddleware');
const fieldsValidator = require('../../middlewares/fieldsValidator');
const categoriesController = require('../../controllers/categoriesController');

categoriesRouter.post('/', jwtMiddleware.tokenValidator,
fieldsValidator.checkName,
categoriesController.addCategory);

categoriesRouter.get('/', jwtMiddleware.tokenValidator, categoriesController.getAllCategories);

module.exports = categoriesRouter;