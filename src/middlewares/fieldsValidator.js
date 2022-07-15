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
};

module.exports = fieldsValidator;