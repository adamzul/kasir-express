var TransaksiBarangService = require('../services/transaksi-barang.service');
var BarangService = require('../services/barang.service');

exports.getTransaksiBarang = async function(req, res, next){
	var page = req.query.page ? req.query.page : 1;
	var limit = req.query.limit ? req.query.limit : 10;

	try{
		var transaksiBarangs = await TransaksiBarangService.getTransaksiBarang({}, page, limit);
		return res.status(200).json({status:200, data:transaksiBarangs, massage:"success"});
	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}

exports.createTransaksiBarang = async function(req, res, next){
	var transaksiBarang = {
		id_barang: req.body.id_barang,
		jumlah: req.body.jumlah
	};
	console.log(transaksiBarang);
	try{
		var createdTransaksiBarang = await TransaksiBarangService.createTransaksiBarang(transaksiBarang);
		var updatedBarang = await BarangService.transaksiBarang(transaksiBarang);
		return res.status(200).json({status:201, data:createdTransaksiBarang, massage:"success create barang"});

	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}

exports.updateTransaksiBarang = async function(req, res, next){
	if(!req.body._id){
		return res.status(400).json({massage:"_id required"});
	}
	var id = req.body._id;
	var barang = { 
		id_barang: req.body.id_barang ? req.body.id_barang : null,
		jumlah: req.body.jumlah ? req.body.jumlah : null
	};

	try{
		var oldtransaksiBarang = await TransaksiBarangService.findOne({_id: id});
		var updatedTransaksiBarang = await TransaksiBarangService.updateTransaksiBarang(barang);
		oldtransaksiBarang.jumlah = (oldtransaksiBarang.jumlah)*(-1);
		var updatedBarang = await BarangService.transaksiBarang(oldtransaksiBarang);
		updatedBarang = await BarangService.transaksiBarang(updatedTransaksiBarang);
		return res.status(200).json({status:200, data:updatedTransaksiBarang, massage:"success update barang"});
	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}

exports.deleteTransaksiBarang = async function(req, res, next){
	var id = req.params.id;
	try{
		removedTransaksiBarang = await TransaksiBarangService.deleteTransaksiBarang(id);
		removedTransaksiBarang.jumlah = (removedTransaksiBarang.jumlah)*(-1);
		updatedBarang = await BarangService.transaksiBarang(removedTransaksiBarang);
		return res.status(200).json({status:200, massage:"success delete barang"});
	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}