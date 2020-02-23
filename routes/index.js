var express = require('express');
var router = express.Router();

var authRouter = require("./auth");
var adminRouter = require("./admin");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/auth", authRouter);

module.exports = router;