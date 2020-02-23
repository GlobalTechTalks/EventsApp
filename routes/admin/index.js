var express = require('express');
var router = express.Router();
const passport = require('passport');

AuthMiddleware = function (req, res, next) {
    
    require('../../middleware/passport').AdminAuth(passport);

    passport.authenticate('jwt', function (err, user, info) {

        if (!user) {
            if (info) {
                return ReE(res, info.message, 401);
            }

            return ReE(res, err, 401);
        }

        req.admin = user;
        return next();

    })(req, res, next);
};

router.use('/agents', AuthMiddleware, require('./vendor'));

module.exports = router;