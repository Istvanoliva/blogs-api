const express = require('express');

const categoriesRouter = express.Router();

const tokenValidator = require('../../middlewares/tokenValidator');
const fieldsValidator = require('../../middlewares/fieldsValidator');
const categoriesController = require('../../controllers/categoriesController');

categoriesRouter.post('/', tokenValidator,
fieldsValidator.checkName,
categoriesController.addCategory);

categoriesRouter.get('/', tokenValidator, categoriesController.getAllCategories);

module.exports = categoriesRouter;