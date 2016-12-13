var app = require('express')();
var hbs = require('express-handlebars');
var http = require('http').Server(app);
var io = require('socket.io')(http);

//var app = express();

var PORT = process.env.PORT || 4000;

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.get('/', function(req, res) {
// 	res.render('socket');
// });
app.get('/', function(req, res) {
	res.render('socketlist');
});

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });

// io.on('connection', function(socket){
// 	//console.log('a user connected');

//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });

io.on('connection', function(socket){
  // socket.on('chat message', function(msg){
    //io.emit('update users', );
    var users = Object.keys(io.sockets.sockets);
    	io.emit('update users', users);
    console.log('connected:', socket.id);
    
    socket.on('disconnect', function(data) {
    	var users = Object.keys(io.sockets.sockets);
    	io.emit('update users', users);
    });
    socket.on('mouse move', function(msg) {
    	socket.broadcast.emit('someone moved', msg);
    });
  });
// });

http.listen(PORT, function() {
  console.log('listening on port ', PORT);

});