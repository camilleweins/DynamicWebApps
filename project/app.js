var express = require('express');
var hbs = require('express-handlebars');
var app = express();

var Mongoose = require('mongoose');
Mongoose.connect(process.env.DB_URL);

var Name = require('./models.schema');

var tabby = new Name({
	type: "Tabby"
});

tabby.save(function(err, res) {
	if (err) console.log('error saving');
	else console.log('saved successfully');
});

var myData = {
	"people": [
	{"names": "person"},
	{"names": "boris"},
	{"names": "caro"}
	]
};

var portNum = 8888;
app.set('port', portNum);

app.engine('handlebars', hbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//middleware to get css location
app.use(express.static('public'));

app.listen(portNum, function() {
	console.log('listening on port', portNum);
});