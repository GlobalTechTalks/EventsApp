var express = require("express");

var controller = require("./vendor.controller");
var router = express.Router();

router.post("/", controller.createVendor);


module.exports = router;