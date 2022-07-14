const fieldsValidator = {
    isFilled: (req, res, next) => {
        const message = { message: 'Some required fields are missing' };
        const fields = Object.values(req.body);
        const isEmpty = fields.some((item) => !item.length);

        if (isEmpty) return res.status(400).json(message);
        next();
    },
};

module.exports = fieldsValidator;