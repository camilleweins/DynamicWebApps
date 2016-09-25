var http = require('http');

var portNum = 9000;

http.createServer(function(req, res){
    var path = req.url;
    
    if (path == '/') {
        res.writeHead(200);
        res.end('<h1>Hello World</h1>');
    } else {
        res.writeHead(404);
        res.end('Page not Found')
    }
    //console.log(req);
   // res.writeHead(200);
   // res.end('Hello World');
}).listen(portNum);

console.log('Server running on port ' + portNum + ' Ctrl C to stop');