const express = require('express');

const postRouter = express.Router();

const jwtMiddleware = require('../../middlewares/jwtMiddleware');
const fieldsValidator = require('../../middlewares/fieldsValidator');
const postController = require('../../controllers/postController');

postRouter.post('/', jwtMiddleware.tokenValidator,
fieldsValidator.isFilled,
fieldsValidator.categoryValidator,
postController.createPost);

postRouter.get('/', jwtMiddleware.tokenValidator, postController.getAllPosts);

postRouter.get('/:id', jwtMiddleware.tokenValidator, postController.getPost);

postRouter.put('/:id', jwtMiddleware.tokenValidator,
jwtMiddleware.verifyUser,
fieldsValidator.isFilled,
postController.updatePost);

module.exports = postRouter;