const rateLimit = require("express-rate-limit");
const { REQUEST_LIMIT_MESSAGE } = require('../constant/message')

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hours
    max: 2, // limit each IP to 10 requests per windowMs
    message: REQUEST_LIMIT_MESSAGE
});

module.exports = { limiter }