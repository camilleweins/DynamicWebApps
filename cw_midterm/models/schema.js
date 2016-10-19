var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kSchema = new Schema({
	imageFileName: String,
	dateCreated: Date,
	speed: Number

});

var Kaleidoscope = mongoose.model('Kaleidoscope', kSchema);

module.exports = Kaleidoscope;