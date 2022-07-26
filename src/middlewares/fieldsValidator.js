const validator = require('email-validator');
const status = require('../status');
const { Category } = require('../database/models');

const fieldsValidator = {
    isFilled: (req, res, next) => {
        const { missingFields } = status;
        const fields = Object.values(req.body);
        const isEmpty = fields.some((item) => !item.length);

        if (isEmpty) {
            return res.status(missingFields.status).json({ message: missingFields.message });
        }
        next();
    },
    nameValidator: (req, res, next) => {
        const { invalidName } = status;
        const { displayName } = req.body;
        const MIN_LENGTH = 8;
        
        if (displayName.length < MIN_LENGTH) {
            return res.status(invalidName.status).json({ message: invalidName.message });
        }
        next();
    },
    emailValidator: (req, res, next) => {
        const { invalidEmail } = status;
        const { email } = req.body;
        const validate = validator.validate(email);
        if (!validate) {
            return res.status(invalidEmail.status).json({ message: invalidEmail.message });
        }
        next();
    },
    passwordValidator: (req, res, next) => {
        const { invalidPassword } = status;
        const { password } = req.body;
        const MIN_LENGTH = 6;
        
        if (password.length < MIN_LENGTH) {
            return res.status(invalidPassword.status).json({ message: invalidPassword.message });
        }
        next();        
    },
    checkName: (req, res, next) => {
        const { noName } = status;
        const { name } = req.body;
        if (!name) return res.status(noName.status).json({ message: noName.message });
        next();
    },
    categoryValidator: async (req, res, next) => {
        const { noCategory } = status;
        const { categoryIds } = req.body;
        const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
        if (!count) return res.status(noCategory.status).json({ message: noCategory.message });
        next();
    },
};

module.exports = fieldsValidator;