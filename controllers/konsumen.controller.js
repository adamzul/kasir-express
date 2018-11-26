var KonsumenService = require('../services/konsumen.service');

exports.getKonsumen = async function(req, res, next){
	var page = req.query.page ? req.query.page : 1;
	var limit = req.query.limit ? req.query.limit : 10;

	try{
		var konsumens = await KonsumenService.getKonsumen({}, page, limit);
		return res.status(200).json({status:200, data:konsumens, massage:"success"});
	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}

exports.createKonsumen = async function(req, res, next){
	var konsumen = {
		nama: req.body.nama,
		jenisKelamin: req.body.jenisKelamin,
		alamat: req.body.alamat
	};
	try{
		var createdKonsumen = await KonsumenService.createKonsumen(konsumen);
		return res.status(200).json({status:201, data:createdKonsumen, massage:"success create konsumen"});

	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}

exports.updateKonsumen = async function(req, res, next){
	if(!req.body._id){
		return res.status(400).json({massage:"_id required"});
	}
	var id = req.body._id;
	var konsumen = { 
		id,
		nama: req.body.nama ? req.body.nama : null,
		jenisKelamin: req.body.jenisKelamin ? req.body.jenisKelamin : null,
		alamat: req.body.alamat ? req.body.alamat : null
	};

	try{
		var updatedKonsumen = await KonsumenService.updateKonsumen(konsumen);
		return res.status(200).json({status:200, data:updatedKonsumenmen, massage:"success update konsumen"});
	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}

exports.deleteKonsumen = async function(req, res, next){
	var id = req.params.id;
	try{
		removedKonsumen = await KonsumenService.deleteKonsumen(id);
		return res.status(200).json({status:200, massage:"success delete konsumen"});
	}catch(e){
		return res.status(400).json({status:400, massage:e.massage});
	}
}