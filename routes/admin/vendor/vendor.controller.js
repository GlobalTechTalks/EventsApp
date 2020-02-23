var bcrypt = require("bcryptjs");
const Nexmo = require('nexmo');
var _ = require('underscore');

const User = require("../../../models").User;

var Sequelize = require("sequelize");
const Op = Sequelize.Op;

const nexmo = new Nexmo({
  apiKey: CONFIG.Nexmo_key,
  apiSecret: CONFIG.Nexmo_secret
});

var createVendor = async function (req, res, next) {

};
module.exports.createVendor = createVendor;
