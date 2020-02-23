const { INTERNAL_SERVER_ERROR } = require('../constant/message');
const { INTERNAL_ERROR } = require('../constant/httpstatus');

const handleError = (err, req, res, next) => {

    res.status(err.httpStatus || INTERNAL_ERROR).json(err.message || INTERNAL_SERVER_ERROR)

}
const errorHandler = (expressApp, handleError) => {
    expressApp.use(handleError);

}



module.exports = { handleError, errorHandler }