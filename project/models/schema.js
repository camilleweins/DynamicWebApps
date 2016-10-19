var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nameSchema = new Schema({
	name: String
});

var Name = mongoose.model('Name', nameSchema);

module.exports = Name; //when we require this file we get Name file and model