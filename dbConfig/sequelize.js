const Sequelize = require('sequelize');
const { DATABASE, USER, PASSWORD, DIALECT, HOST } = require('../environment/environment');
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,

});
module.exports = { sequelize };