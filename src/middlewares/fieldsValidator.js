const validator = require('email-validator');
const status = require('../status');

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
};

module.exports = fieldsValidator;