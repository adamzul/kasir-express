var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
var Schema = mongoose.Schema;

var transaksiBarangSchema = new mongoose.Schema({
	id_barang: { type: Schema.Types.ObjectId, ref: 'barang' },
	jumlah: Number,
});

transaksiBarangSchema.plugin(mongoosePaginate);
const transaksiBarang = mongoose.model('transaksiBarang', transaksiBarangSchema);
module.exports = transaksiBarang;

