var Barang = require('../models/barang.model');
_this = this

exports.getBarang = async function(query, page, limit){
	var options = {page, limit};
	try{
		var barangs = await Barang.paginate(query, limit);
		return barangs;
	}catch(e){
		throw Error('error get barang');
	}
}

exports.createBarang = async function(barang){
	var newBarang = new Barang({
		nama:barang.nama,
		deskripsi: barang.deskripsi,
		jumlah: barang.jumlah
	});

	try{
		var savedBarang = await newBarang.save();
		return savedBarang;
	}catch(e){
		throw Error('error save');
	}
}

exports.updateBarang = async function(barang){
	var id = barang.id;
	try{
		var oldBarang = await Barang.findById(id);
	}catch(e){
		Error('error find barang');
	}
	if(!oldBarang){
		return false;
	}

	oldBarang.nama = barang.nama;
	oldBarang.deskripsi = barang.deskripsi;
	oldBarang.jumlah = barang.jumlah;
	try{
		savedBarang = await oldBarang.save();
		return savedBarang;		
	}catch(e){
		throw Error('error update barang');
	}
}

exports.deleteBarang = async function(id){
	try{
		var deleted = await Barang.remove({_id: id});
		if(deleted.n === 0){
			throw Error('barang not found');
		}
		return deleted;
	}catch(e){
		throw Error('error delete barang');
	}
}

exports.transaksiBarang = async function(barang){
	var id = barang.id_barang;
	try{
		var oldBarang = await Barang.findById(id);
	}catch(e){
		Error('error find barang');
	}
	if(!oldBarang){
		return false;
	}

	oldBarang.jumlah += Number(barang.jumlah);
	try{
		savedBarang = await oldBarang.save();
		return savedBarang;		
	}catch(e){
		throw Error('error update barang');
	}
}