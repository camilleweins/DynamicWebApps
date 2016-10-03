var express = require('express');
var hbs = require('express-handlebars');

var app = express();


//console.log(myData);

var portNum = 8888;
app.set('port', portNum); //set view engine port

app.engine('handlebars', hbs({ defaultLayout: 'main.handlebars' })); //how everything will look
//rendering our handlebars template
app.set('view engine', 'handlebars');

app.get('/orbits', function(req, res) { //put your handlebars template data here
    var perihelion = [
        { "perihelion_distance": ".9463115141456938", },
        { "perihelion_distance": "1.042012919447983", }
    ];
    var id = [{ "orbit_id": "2" }, { "orbit_id": "4" }];

    var data = {
        id: orbit_id,
        perihelion: perihelion_distance
    };

    res.render('orbits', data);
});

function getData(){
            return {
                "orbital_data": [{
                    "orbit_id": "4",
                    "orbit_determination_date": "2014-06-13 16:12:50",
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".10604",
                    "jupiter_tisserand_invariant": "5.236",
                    "epoch_osculation": "2457600.5",
                    "eccentricity": ".1346879730496622",
                    "semi_major_axis": "1.204204826691709",
                    "inclination": "16.39779674663016",
                    "ascending_node_longitude": "1.413867390688114",
                    "orbital_period": "482.66851728413",
                    "perihelion_distance": "1.042012919447983",
                    "perihelion_argument": "63.92917832581615",
                    "aphelion_distance": "1.366396733935435",
                    "perihelion_time": "2457710.351347320824",
                    "mean_anomaly": "278.0669887938499",
                    "mean_motion": ".7458534938753436",
                    "equinox": "J2000"
                }, {
                    "orbit_id": "262",
                    "orbit_determination_date": "2016-09-13 06:17:38",
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".356292",
                    "jupiter_tisserand_invariant": "6.099",
                    "epoch_osculation": "2457600.5",
                    "eccentricity": ".8170273465637835",
                    "semi_major_axis": ".9142990505923407",
                    "inclination": "32.52662267682576",
                    "ascending_node_longitude": "237.3815235659303",
                    "orbital_period": "319.323462707925",
                    "perihelion_distance": ".1672917233210941",
                    "perihelion_argument": "281.6030898122164",
                    "aphelion_distance": "1.661306377863587",
                    "perihelion_time": "2457694.871744903537",
                    "mean_anomaly": "253.6068528219987",
                    "mean_motion": "1.127383490543194",
                    "equinox": "J2000"
                }, {
                    "orbit_id": "21",
                    "orbit_determination_date": "2016-09-30 06:42:07",
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".197531",
                    "jupiter_tisserand_invariant": "4.537",
                    "epoch_osculation": "2457600.5",
                    "eccentricity": ".2775605325040033",
                    "semi_major_axis": "1.467506694500017",
                    "inclination": "13.7772101634235",
                    "ascending_node_longitude": "187.7368277843887",
                    "orbital_period": "649.334627670648",
                    "perihelion_distance": "1.060184754921403",
                    "perihelion_argument": "96.92995975282388",
                    "aphelion_distance": "1.874828634078632",
                    "perihelion_time": "2457546.401698630995",
                    "mean_anomaly": "29.99283830388901",
                    "mean_motion": ".5544136792633786",
                    "equinox": "J2000"
                }
                ]

            };
        }
app.use(function(req, res, next) {
     if(!res.locals.partials)res.locals.partials= {};
     res.locals.partials.dataContext = getData();
     next();
})

app.get('/:perihelion', function(req, res) {
     res.render('perihelionDistance', {
          perihelion: req.params.perihelion
     });
});


        //res.render('home', {
        //  name: req.params.name
        //}); //looking for view/home.handlebars in views folder
        //passing name in html
        //gets rendered into html and gets put in default location
        //});

        app.listen(portNum, function() {
            console.log('listening on port ', portNum);
        });
