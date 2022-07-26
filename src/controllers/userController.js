const userService = require('../services/userService');

const userController = {
    login: async (req, res, next) => {
        const { email, password } = req.body;

        try {
            const token = await userService.login(email, password);
            return res.status(200).json({ token });
        } catch (error) {
            next(error);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const token = await userService.createUser(req.body);
            return res.status(201).json({ token });
        } catch (error) {
            next(error);
        }
    },
    getAllUsers: async (_req, res, next) => {
        try {
            const users = await userService.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },
    findUser: async (req, res, next) => {
        const { id } = req.params;
        try {
            const user = await userService.findUser(id);
            return res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },
    deleteUser: async (req, res, next) => {
        const { id } = req.user.data;
        try {
            await userService.deleteUser(id);
            res.status(204).end();
        } catch (error) {
            next(error);
        }
    },
};

module.exports = userController;