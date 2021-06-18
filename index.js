const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request for " + req.url + 'by method ' );

    if(req.method == 'GET'){
        var fileUrl;
        if(req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if(fileExt == '.html'){
            fs.exists(filePath, (fs.exists) => {
                if(!fs.exists){
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text');
                    res.end('<html><body><h1>Error 404: ' + fileUrl + 
                    ' not found</h1></body></html>');

                    return;
                }
                res.statusCode = 200;
                res.setHeader('content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);            
            })
        }

    }

    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    fs.createReadStream(filePath).pipe(res);
})

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`)
});