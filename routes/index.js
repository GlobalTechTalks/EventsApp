var express = require('express');
var router = express.Router();
const passport = require('passport');

router.use('/', function(req,res){
    res.status(200).send("Done");
});
router.use('/auth', require('./auth'));

module.exports = router;