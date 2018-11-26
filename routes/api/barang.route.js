var express = require('express');
var router = express.Router();

var BarangController = require('../../controllers/barang.controller');

router.get('/', BarangController.getBarang);
router.post('/', BarangController.createBarang);
router.put('/', BarangController.updateBarang);
router.delete('/:id', BarangController.deleteBarang);

module.exports = router;