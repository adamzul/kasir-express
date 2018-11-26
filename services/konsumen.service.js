var Konsumen = require('../models/konsumen.model');
_this = this

exports.getKonsumen = async function(query, page, limit){
	var options = {page, limit};
	try{
		var konsumens = await Konsumen.paginate(query, limit);
		return konsumens;
	}catch(e){
		throw Error('error get konsumen');
	}
}

exports.createBarang = async function(konsumen){
	var newKonsumen = new Konsumen({
		nama:konsumen.nama,
		jenisKelamin: konsumen.jenisKelamin,
		alamat: konsumen.alamat
	});

	try{
		var savedKonsumen = await newKonsumen.save();
		return savedKonsumen;
	}catch(e){
		throw Error('error save');
	}
}

exports.updateKonsumen = async function(konsumen){
	var id = konsumen.id;
	try{
		var oldKonsumen = await Konsumen.findById(id);
	}catch(e){
		Error('error find komsuen');
	}
	if(!oldKonsumen){
		return false;
	}

	oldKonsumen.nama = barang.nama;
	oldKonsumen.jenisKelamin = barang.jenisKelamin;
	oldKonsumen.alamat = barang.alamat;
	try{
		savedKonsumen = await oldKonsumen.save();
		return savedKonsumen;		
	}catch(e){
		throw Error('error update komsumen');
	}
}

exports.deleteKonsumen = async function(id){
	try{
		var deleted = await Konsumen.remove({_id: id});
		if(deleted.n === 0){
			throw Error('konsumen not found');
		}
		return deleted;
	}catch(e){
		throw Error('error delete konsumen');
	}
}