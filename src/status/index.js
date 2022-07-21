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
    noToken: {
        status: 401,
        message: 'Token not found',
    },
    invalidToken: {
        status: 401,
        message: 'Expired or invalid token',
    },
    userNotFound: {
        status: 404,
        message: 'User does not exist',
    },
    noName: {
        status: 400,
        message: '"name" is required',
    },
    noCategory: {
        status: 400,
        message: '"categoryIds" not found',
    },
    noPost: {
        status: 404,
        message: 'Post does not exist',
    },
    unauthorized: {
        status: 401,
        message: 'Unauthorized user',
    },
};

module.exports = status;