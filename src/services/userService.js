const { User } = require('../database/models');
const generateToken = require('../utils/tokenGenerator');
const status = require('../status');

const loginService = {
    login: async (email, password) => {
        const user = await User.findOne({ where: { email } });

        if (!user || user.password !== password) throw status.invalidField;

        const token = generateToken(email);

        return token;
    },
};

module.exports = loginService;