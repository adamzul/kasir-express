var express = require('express');
var router = express.Router();

var TransaksiBarangController = require('../../controllers/tambah-jumlah-barang.controller');
var BarangController = require('../../controllers/barang.controller');

router.get('/', TransaksiBarangController.getTransaksiBarang);
router.post('/', TransaksiBarangController.createTransaksiBarang); 
router.put('/', TransaksiBarangController.updateTransaksiBarang);
router.delete('/:id', TransaksiBarangController.deleteTransaksiBarang);

module.exports = router;