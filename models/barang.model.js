var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var barangSchema = new mongoose.Schema({
	nama: String,
	deskripsi: String,
	jumlah: Number
});

barangSchema.plugin(mongoosePaginate);
const barang = mongoose.model('barang', barangSchema);
module.exports = barang;