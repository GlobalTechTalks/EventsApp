const bodyParser = require('body-parser')
const cors = require('cors')
const xss = require('xss-clean');
const helmet = require('helmet');

const expressLoader = async (expressApp) => {
    expressApp.use(bodyParser.urlencoded({ extended: false }));
    expressApp.use(bodyParser.json({ limit: '10kb' }));//default pay load 10kb
    expressApp.use(cors());
    expressApp.use(xss());
    expressApp.use(helmet());
}

module.exports = { expressLoader }