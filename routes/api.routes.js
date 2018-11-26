var express = require('express');

var router = express.Router();
var barang = require('./api/barang.route');
var transaksiBarang = require('./api/transaksi-barang.route');
var konsumen = require('./api/konsumen.route');
var auth = require('./api/auth.route');
var passportConfig = require('../configs/passport.config');
var passport = require('passport');
require('../configs/passport.config').option(passport);


router.use('/barang', passport.authenticate('jwt', { session: false}), barang);
router.use('/transaksi-barang', passport.authenticate('jwt', { session: false}), transaksiBarang);
router.use('/konsumen', passport.authenticate('jwt', { session: false}), konsumen);
router.use('/auth', auth);

module.exports = router;