const { User } = require('../database/models');
const generateToken = require('../utils/tokenGenerator');
const status = require('../status');

const loginService = {
    login: async (email, password) => {
        const user = await User.findOne({ where: { email } });

        if (!user || user.password !== password) throw status.invalidField;

        return generateToken(email);
    },
    createUser: async (data) => {
        const { email } = data;
        const user = await User.findOne({ where: { email } });

        if (user) throw status.emailExist;

        await User.create({ ...data });
        return generateToken(email);
    },
};

module.exports = loginService;