const config = require('./configuration.json');
const defaultConfig = config['development'];
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = Object.assign({}, defaultConfig, environmentConfig);

module.exports = finalConfig;