const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('<html><body><h1>Server Funcinando!</h1></body>')
})

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`)
});