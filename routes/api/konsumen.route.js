var express = require('express');
var router = express.Router();

var KonsumenController = require('../../controllers/konsumen.controller');

router.get('/', KonsumenController.getKonsumen);
router.post('/', KonsumenController.createKonsumen);
router.put('/', KonsumenController.updateKonsumen);
router.delete('/:id', KonsumenController.deleteKonsumen);

module.exports = router;