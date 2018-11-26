var TransaksiBarang = require('../models/transaksi-barang.model');
_this = this

exports.getTransaksiBarang = async function(query, page, limit){
	var options = {page, limit, populate:'id_barang'};
	try{
		var transaksiBarangs = await TransaksiBarang.paginate(query, options);
		return transaksiBarangs;
	}catch(e){
		throw Error('error get barang');
	}
}

exports.createTransaksiBarang = async function(transaksiBarang){
	var newTransaksiBarang = new TransaksiBarang({
		id_barang:transaksiBarang.id_barang,
		jumlah: transaksiBarang.jumlah
	});

	try{
		var savedTransaksiBarang = await newTransaksiBarang.save();
		return newTransaksiBarang;
	}catch(e){
		throw Error('error save');
	}
}

exports.updateTransaksiBarang = async function(transaksiBarang){
	var id = transaksiBarang.id;
	try{
		var oldTransaksiBarang = await TransaksiBarang.findById(id);
	}catch(e){
		Error('error find barang');
	}
	if(!oldBarang){
		return false;
	}

	oldTransaksiBarang.nama = transaksiBarang.nama;
	oldTransaksiBarang.deskripsi = transaksiBarang.deskripsi;
	oldTransaksiBarang.jumlah = transaksiBarang.jumlah;
	try{
		savedTransaksiBarang = await oldTransaksiBarang.save();
		return savedTransaksiBarang;		
	}catch(e){
		throw Error('error update barang');
	}
}

exports.deleteTransaksiBarang = async function(id){
	try{
		var deleted = await TransaksiBarang.findOneAndDelete({_id: id});
		if(!deleted){
			throw Error('barang not found');
		}
		console.log(deleted);
		return deleted;
	}catch(e){
		throw Error('error delete barang');
	}
}

exports.findOne = async function(filter){
	try{
		var transaksiBarang = await TransaksiBarang.findOne(filter);
		if(!transaksiBarang){
			throw Error('transaksiBarang not found');
		}
		return transaksiBarang;
	}catch(e){
		throw Error('error get transaksiBarang');
	}
}