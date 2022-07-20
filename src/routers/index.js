const express = require('express');

const router = express.Router();

const loginRouter = require('./login');
const userRouter = require('./user');
const categoriesRouter = require('./categories');
const postRouter = require('./post');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postRouter);

module.exports = router;