const express = require('express');

const router = express.Router();

const loginRouter = require('./login');
const userRouter = require('./user');
const categoriesRouter = require('./categories');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);

module.exports = router;