const http = require('http');

http.createServer((_, res) => {
    res.write("My NodeJS server is live");
    res.end();
}).listen(4040);