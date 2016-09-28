var express = require('express');
var app = express();

var myData = {
     "orbital_data": {
          "orbit_id": "2",
          "orbit_determination_date": "2016-04-25 12:24:11",
          "orbit_uncertainty": "8",
          "minimum_orbit_intersection": ".168065",
          "jupiter_tisserand_invariant": "4.601",
          "epoch_osculation": "2457489.5",
          "eccentricity": ".3188251450795888",
          "semi_major_axis": "1.389234360766681",
          "inclination": "29.12451644380201",
          "ascending_node_longitude": "194.0263455757923",
          "orbital_period": "598.0833351806452",
          "perihelion_distance": ".9463115141456938",
          "perihelion_argument": "83.46831020128032",
          "aphelion_distance": "1.832157207387667",
          "perihelion_time": "2457561.895212405844",
          "mean_anomaly": "316.4236705270646",
          "mean_motion": ".6019228071139376",
          "equinox": "J2000"
        }
}

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