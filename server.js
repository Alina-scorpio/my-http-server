const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const routes = require('./routes');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method.toUpperCase();
    const routeHandler = routes[method][parsedUrl.pathname];

    if (routeHandler) {
        routeHandler(req, res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
