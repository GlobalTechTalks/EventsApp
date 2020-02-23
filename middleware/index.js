const { expressLoader } = require('./express-loader')
const { syncDatabase } = require('../middleware/databaseLoader');
const { handleError, errorHandler } = require('./errorHandler');
const { enableRoutes } = require('./enableRoutes');

const init = async (expressApp) => {


    await expressLoader(expressApp);
    await syncDatabase();
    enableRoutes(expressApp);
    errorHandler(expressApp, handleError);




}
module.exports = { init }
