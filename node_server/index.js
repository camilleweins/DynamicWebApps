var express = require('express');
var app = express();

//if you successfully navigate to this path you get to the home page
app.get('/', function(req, res){
       res.sent('<h1>Home Page</h1>');
});

app.get('/profile/:name', function(req,res) {
    res.status(200);
    res.type('json');
    res.send({
        name: req.params.name
    });
});

//middlewear to insert express static thing
//make sure no folder inside public directory
app.use(express.static(__dirname +  '/public'));

//fill in name from a profile
//app.get('/profile/:name', function(req, res) {
    res.send('<h1>Your name is ' + req.params.name + '</h1>');
};

//get request
//if you go anywhere that is not the home page you get an error
app.get('*', function(req, res){
    res.status(404);
    res.send('404- Not Found');
});
        

//same as var app = require('express')();

app.listen(3001);

console.log('listening on port 3001'); //wooo everything is working
//terminal node index.js to run it