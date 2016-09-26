var express = require('express');
var app = express();

//view directory
app.set("views", __dirname + '/views');

//link css and other js files to public folder
app.use(express.static(__dirname + '/public'));

app.get("GET /rest/v1/feed/today", function(req, res) {
	var earthDistance = req.params;
	var requestURL = "https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=WPzPTu9m5hI1SrfCcPpBIssrdH89VpdeCwf1CMsO";
	Request(requestURL, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var theData = JSON.parse(body);
			res.json(theData);
		}
		
	});
});

app.get("*", function(req, res) {
	res.writeHead(404);
	res.send('Whooops, my bad');
});

//start the server
app.listen(3000);
