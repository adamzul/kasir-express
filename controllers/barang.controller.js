var BarangService = require('../services/barang.service');

exports.getBarang = async function(req, res, next){
	var page = req.query.page ? req.query.page : 1;
	var limit = req.query.limit ? req.query.limit : 10;

	try{
		var barangs = await BarangService.getBarang({}, page, limit);
		return res.status(200).json({status:200, data:barangs, massage:"success"});
	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}

exports.createBarang = async function(req, res, next){
	var barang = {
		nama: req.body.nama,
		deskripsi: req.body.deskripsi,
		jumlah: 0
	};
	try{
		var createdBarang = await BarangService.createBarang(barang);
		return res.status(200).json({status:201, data:createdBarang, massage:"success create barang"});

	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}

exports.updateBarang = async function(req, res, next){
	if(!req.body._id){
		return res.status(400).json({massage:"_id required"});
	}
	var id = req.body._id;
	var barang = { 
		id,
		nama: req.body.nama ? req.body.nama : null,
		deskripsi: req.body.deskripsi ? req.body.deskripsi : null,
		jumlah: req.body.jumlah ? req.body.jumlah : null
	};

	try{
		var updatedBarang = await BarangService.updateBarang(barang);
		return res.status(200).json({status:200, data:updatedBarang, massage:"success update barang"});
	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}

exports.deleteBarang = async function(req, res, next){
	var id = req.params.id;
	try{
		removedBarang = await BarangService.deleteBarang(id);
		return res.status(200).json({status:200, massage:"success delete barang"});
	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}