//Write a sample javascript hello world code with connection type set to keep-alive
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}
).listen(1337);
console.log('Server running at XXXXXXXXXXXXXXXXXXXXXX');


