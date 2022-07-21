require('dotenv').config();
const jwt = require('jsonwebtoken');
const status = require('../status');

const { BlogPost } = require('../database/models');

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
    verifyUser: async (req, res, next) => {
        const { unauthorized } = status;
        const { authorization: token } = req.headers;
        const { id } = req.params;

        try {
            const user = jwt.verify(token, secret);
            const post = await BlogPost.findByPk(id);
            
            if (!post) throw status.noPost;
            if (user.data.id !== post.dataValues.userId) {
                return res.status(unauthorized.status).json({ message: unauthorized.message });
            }
            next();
        } catch (error) {
            next(error);
        }
      },
}; 

module.exports = jwtMiddleware;