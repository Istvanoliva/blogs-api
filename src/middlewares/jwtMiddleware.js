require('dotenv').config();
const jwt = require('jsonwebtoken');
const status = require('../status');

const secret = process.env.JWT_SECRET;

const jwtMiddleware = {
    tokenValidator: (req, res, next) => {
        const { noToken, invalidToken } = status;
        const { authorization: token } = req.headers;
      
        if (!token) return res.status(noToken.status).json({ message: noToken.message });
      
        try {
          const user = jwt.verify(token, secret);
          req.user = user;
          next();
        } catch (error) {
            return res.status(invalidToken.status).json({ message: invalidToken.message }); 
        }
    },
}; 

module.exports = jwtMiddleware;