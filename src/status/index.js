const status = {
    missingFields: {
        status: 400,
        message: 'Some required fields are missing',
    },
    invalidField: {
        status: 400,
        message: 'Invalid fields',
    },
};

module.exports = status;