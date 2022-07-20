const express = require('express');

const postRouter = express.Router();
const tokenValidator = require('../../middlewares/tokenValidator');
const fieldsValidator = require('../../middlewares/fieldsValidator');
const postController = require('../../controllers/postController');

postRouter.post('/', tokenValidator, fieldsValidator.isFilled, fieldsValidator.categoryValidator,
postController.createPost);

postRouter.get('/', tokenValidator, postController.getAllPosts);

postRouter.get('/:id', tokenValidator, postController.getPost);

module.exports = postRouter;