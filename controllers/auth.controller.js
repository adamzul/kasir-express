var mongoose = require('mongoose');
var passport = require('passport');
// var config = require('../config/database');
// require('../configs/passport.config')(passport);
var passportConfig = require('../configs/passport.config');
// var express = require('express');
var jwt = require('jsonwebtoken');
// var router = express.Router();
var User = require("../models/user.model");
// var Book = require("../models/book");

exports.signup = async function(req, res, next){
	if (!req.body.username || !req.body.password) {
	    res.json({success: false, msg: 'Please pass username and password.'});
	  } else {
	    var newUser = new User({
	      username: req.body.username,
	      password: req.body.password
	    });
	    // save the user
	    newUser.save(function(err) {
	      if (err) {
	        return res.json({success: false, msg: 'Username already exists.'});
	      }
	      res.json({success: true, msg: 'Successful created new user.'});
	    });
	  }
}

exports.login = async function(req, res, next){
	User.findOne({
    username: req.body.username
	  }, function(err, user) {
	    if (err) throw err;

	    if (!user) {
	      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
	    } else {
	      // check if password matches
	      user.comparePassword(req.body.password, function (err, isMatch) {
	        if (isMatch && !err) {
	          // if user is found and password is right create a token
	          var token = jwt.sign(user.toJSON(), passportConfig.secretOrKey);
	          // return the information including token as JSON
	          res.json({success: true, token: 'JWT ' + token});
	        } else {
	          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
	        }
	      });
	    }
	  });
}	



