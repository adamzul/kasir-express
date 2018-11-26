var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
	nama: String,
	deskripsi: String,
	jumlah: Number
});

schema.plugin(mongoosePaginate);
const konsumen = mongoose.model('konsumen', schema);
module.exports = konsumen;