var express = require('express');
var router = express.Router();

var AuthController = require('../../controllers/auth.controller');

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
// router.put('/', BarangController.updateBarang);
// router.delete('/:id', BarangController.deleteBarang);

module.exports = router;