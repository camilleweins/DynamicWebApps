var express = require('express');
var hbs = require('express-handlebars');

var app = express();

var myData = {
     "orbital_data": [
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
        ]
}

var portNum = 8888;
app.set('port', portNum); //set view engine port

app.engine('handlebars', hbs({defaultLayout: 'main'}) ); //how everything will look
//rendering our handlebars template
app.set('view engine', 'handlebars');

app.get('/:name', function(req, res) { //put your handlebars template data here
	res.render('home', {
		name: req.params.name
		}); //looking for view/home.handlebars in views folder
	//passing name in html
	//gets rendered into html and gets put in default location
});

app.listen(portNum, function() {
	console.log('listening on port ', portNum);
});