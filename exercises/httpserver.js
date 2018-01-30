const http = require('http');

const server = http.createServer(function(request, response) {
    console.log(request.url);
    response.write('ok');
    response.end();
});

server.listen(3030, function() {
    console.log('server is running');
});