var Twit = require('twit');
var fs = require('fs');
require('dotenv').config();

var config = {
	consumer_key: process.env.consumer_key,
	consumer_secret: process.env.consumer_secret,
	access_token: process.env.access_token,
	access_token_secret: process.env.access_token_secret
}

var T = Twit(config);
// var drugs = fs.readFileSync('./corpora/drugNameStems.json');

var drugs = fs.readFileSync('./corpora/drugNameStems.json');
drugs = JSON.parse(drugs).stems;
console.log(drugs);
return;

// for (i = 0; drugs.length < 20; i++) {
// 	drugs = JSON.parse(drugs).stems;
// 	console.log(drugs);
// return;
// }



function getRandom(arr) {
	var index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

function tweet() {
	var msg = getRandom(drugs);

	//var msg = getRandom(description);
	T.post('statuses/update', {status: msg}, function (err, data, res) {
	console.log(data);
});

}

setInterval(tweet, 1000 * 60 *5);
tweet();

//setTimeout()