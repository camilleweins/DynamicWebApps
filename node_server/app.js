var express = require('express');
var app = express();

//route to serve static files
app.get('/info', function(req, res) {
	res.sendFile('.public/' + 'info.html');
});

app.use(express.static(__dirname + '/public'));

//no other middleware route going here so default to 404
app.get('/404', function(req, res, next) {
	next();
});

//trying to make a custom 404 page
app.use(function(req, res, next) {
	res.status(404).sendFile('.public/404.html', {url: req.url} );
//if no route found sent to 404 page
	//if (req.accepts('html')) {
	//	res.render('404', {url: req.url});
	//	return;
	//}
});

app.listen(3001);
console.log('i work');