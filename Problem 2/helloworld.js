var http = require('http');

var host = '127.0.0.1';
var port = 1080;

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!\n');
}).listen(port);

    console.log(`Server running on http://${host}:${port}/`);