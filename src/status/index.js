const status = {
    missingFields: {
        status: 400,
        message: 'Some required fields are missing',
    },
    invalidField: {
        status: 400,
        message: 'Invalid fields',
    },
    invalidName: { 
        status: 400,
        message: '"displayName" length must be at least 8 characters long',
    },
    invalidEmail: {
        status: 400,
        message: '"email" must be a valid email',
    },
    invalidPassword: {
        status: 400,
        message: '"password" length must be at least 6 characters long',
    },
    emailExist: {
        status: 409,
        message: 'User already registered',
    },
};

module.exports = status;