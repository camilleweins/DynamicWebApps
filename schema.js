var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var diagramSchema = new Schema({
	name: String,
	svg: {data: Buffer, type: String}
});

var Diagram = mongoose.model('Diagram', diagramSchema);

module.exports = Diagram; 