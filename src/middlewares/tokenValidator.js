require('dotenv').config();
const jwt = require('jsonwebtoken');
const status = require('../status');

const secret = process.env.JWT_SECRET;

const tokenValidator = (req, res, next) => {
    const { noToken, invalidToken } = status;
    try {
      const token = req.headers.authorization;

      if (!token) return res.status(noToken.status).json({ message: noToken.message });
      jwt.verify(token, secret);
      next();
    } catch (error) {
        return res.status(invalidToken.status).json({ message: invalidToken.message }); 
    }
};

module.exports = tokenValidator;