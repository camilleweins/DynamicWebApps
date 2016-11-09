var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema ({
	role: String,
	treats: [String]

});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User); //export model called 'User' with User schema 