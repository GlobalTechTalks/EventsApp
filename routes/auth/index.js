var express = require('express');

var controller = require('./auth.controller');
var router = express.Router();

router.post("/auth", controller.authCheck);

module.exports = router;