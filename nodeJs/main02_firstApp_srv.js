var http = require("http");         // import require module

http.createServer(function (request, response) {
    // send the HTTP header
    // HTTP status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'});

    // send the response body as "Hello From RaspberryPi"
    response.end('Hello From RaspberryPi!!!\n')
}).listen(8081);

// console will print the message
console.log('Server running at http://192.168.0.21:8081/');
console.log('Para desligar o servidor: ctrl + c');