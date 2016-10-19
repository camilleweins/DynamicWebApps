var express = require('express');
var Mongoose = require('mongoose');
var hbs = require('express-handlebars');
var bodyParse = require('body-parser');

var app = express();

app.use('/api', require('./routes/api'));

require('dotenv').config();

Mongoose.connect(process.env.DB_URL);

var api = require('./routes/api');
app.use('/api', api);

var portNum = 8888;
app.set('port', portNum);

// tell express to use handlebars
app.engine('handlebars', hbs({defaultLayout: 'main'}) );
app.set('view engine', 'handlebars');

//gotta put before api stuff
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var numK = require('./routes/numK');
app.use('/api', api);

app.get('/', function(req, res) {
  res.locals.title = 'Kaleidoscopes';
  // render 'views/home.handlebars' with myData
  res.render('home', myData);
});

app.use( express.static('public') );

// start server
app.listen(portNum, function() {
  console.log('listening on port ', portNum);
});