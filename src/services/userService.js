const { User } = require('../database/models');
const generateToken = require('../utils/tokenGenerator');
const status = require('../status');

const loginService = {
    login: async (email, password) => {
        const user = await User.findOne({ where: { email } });
        if (!user || user.password !== password) throw status.invalidField;
        const { id } = user.dataValues;

        return generateToken({ email, id });
    },
    createUser: async (data) => {
        const { email } = data;
        const user = await User.findOne({ where: { email } });

        if (user) throw status.emailExist;

        await User.create({ ...data });
        return generateToken(email);
    },
    getAllUsers: () => User.findAll({ attributes: { exclude: 'password' } }),

    findUser: async (id) => {
        const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
        
        if (!user) throw status.userNotFound;
        return user; 
    },
    deleteUser: (id) => User.destroy({ where: { id } }),
};

module.exports = loginService;