var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var User = require('../models/user.model');
// var config = require('../config/database'); // get db config file
var temp = "ksjdfkjsdjsdjflk";
exports.secretOrKey = temp;
exports.option = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  // opts.secretOrKey = config.secret;
  opts.secretOrKey = temp;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
}

exports.authJwt = function (req, res, next) {
  if (req.headers && req.headers.authorization) {
    var parted = req.headers.authorization.split(' ');
    if (parted.length === 2) {
      next();
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});;
    }
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});;
  }
};