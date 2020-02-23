var bcrypt = require('bcryptjs');
const Nexmo = require('nexmo');
var moment = require("moment");

const User = require("../../models").User;

var sequelize = require("../../models").Sequelize;
const Op = sequelize.Op;

const nexmo = new Nexmo({
  apiKey: CONFIG.Nexmo_key,
  apiSecret: CONFIG.Nexmo_secret
});

var login = function (req, res, next) {
  req.checkBody({
    'username': {
      notEmpty: true,
      errorMessage: 'Username is required'
    },
    'password': {
      notEmpty: true,
      errorMessage: 'Password is required'
    },
    'deviceType': {
      notEmpty: true,
      errorMessage: 'Device Type is required',
      isIn: {
        options: [["ios", "android"]],
        errorMessage: "Currently only acceptable device types are ios and android"
      }
    },
    'deviceToken': {
      notEmpty: true,
      errorMessage: 'Device Token is required'
    }
  });

  var errors = req.validationErrors();

  if (errors) {
    return ReE(res, errors, 400);
  }

  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(async function(userResponse){
    var user = userResponse;
    if (!user) {
      return ReE(res, "User not found");
    }

    if(user && user.status == 0){
      return ReE(res, "User deactivated!");
    }

    bcrypt
    .compare(req.body.password, user.password)
    .then(async function (result) {
      if (result == true) {
        var data = {
          loginTimes : user.loginTimes +1,
          deviceType : req.body.deviceType,
          deviceToken : req.body.deviceToken
        }
        await User.update(data, {where : {userId:user.userId}});

        user = await User.findOne({
          where : {userId:user.userId},
          include :[{model: Shop}]
        }).catch(err => {
          return ReE(res, err, 400);
        });

        return ReS(res, "Log in Successfull.", {
          payload: user.toWeb(),
          token: user.getJWT()
        });
      }

      return ReE(res, "Wrong password");
    })
    .catch(err => {
      return ReE(res, err, 400);
    });
    
  });
}

module.exports.login = login;

module.exports.signup = function (req, res, next) {
  req.checkBody({
    'username': {
      notEmpty: true,
      errorMessage: 'Username is required'
    },
    'email': {
      notEmpty: true,
      errorMessage: 'Email is required'
    },
    'gender': {
      notEmpty: true,
      errorMessage: 'Gender is required'
    },
    'dateOfBirth': {
      notEmpty: true,
      errorMessage: 'Date Of Birth is required'
    },
    'phone': {
      notEmpty: true,
      errorMessage: 'Phone is required'
    },
    'password': {
      notEmpty: true,
      errorMessage: 'Password is required'
    },
    'deviceType': {
      notEmpty: true,
      errorMessage: 'Device Type is required',
      isIn: {
        options: [["ios", "android"]],
        errorMessage: "Currently only acceptable device types are ios and android"
      }
    },
    'deviceToken': {
      notEmpty: true,
      errorMessage: 'Device Token is required'
    }
  });

  var errors = req.validationErrors();

  if (errors) {
    return ReE(res, errors, 400);
  }

  var postdata = req.body;
  var originalpassword = postdata.password;
  let password = bcrypt.hashSync(originalpassword, 10);
  postdata.password = password;
  postdata.dateOfBirth = moment(postdata.dateOfBirth).format("YYYY-MM-DD HH:mm:ss");
  postdata['role'] = 2;
  postdata['status'] = 1;
  postdata['loginTimes'] = 1;

  User.create(postdata)
  .then(user => {
    var userdata = user.get({ plain: true });
    delete userdata.password
    return ReS(res, "User added successfully.", {
      payload: user.toWeb(),
      token: user.getJWT()
    });  
  })
  .catch((err) => {
    console.log(err)
    return ReE(res, err, 400);
  });
}