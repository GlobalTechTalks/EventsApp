const { sequelize } = require('../dbConfig/sequelize');
const Sequelize = require('sequelize');
const User = sequelize.define('user', {
    userId: Sequelize.STRING,
    firstName: Sequelize.STRING

});
module.exports = User