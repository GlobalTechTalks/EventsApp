const statusCodes = require('./statusCodes');

const errors = {
	USER_NOT_FOUND: {
		code: statusCodes.NOT_FOUND,
		name: 'USER_NOT_FOUND',
		reason: {
			message: 'User not found.'
		}
	},
	INVALID_OR_MISSING_PARAMETERS: {
		code: statusCodes.BAD_REQUEST,
		name: 'INVALID_OR_MISSING_PARAMETERS',
		reason: {
			message: 'The request contains invalid or missing required parameters.'
		}
    },
    INTERNAL_ERROR: {
		code: statusCodes.INTERNAL_ERROR,
		name: 'INTERNAL_ERROR',
		reason: {
			message: 'Something went wrong.'
		}
	},
};

const handler = err => Promise.reject(err || errors.INTERNAL_ERROR);

module.exports = {
	errors,
	handler
};
