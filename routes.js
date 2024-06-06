const fs = require('fs');
const path = require('path');

const getFileContent = (filePath, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>500 Internal Server Error</h1>');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
};

const routes = {
    'GET': {
        '/': (req, res) => {
            const filePath = path.join(__dirname, 'views', 'index.html');
            getFileContent(filePath, res);
        },
        '/about': (req, res) => {
            const filePath = path.join(__dirname, 'views', 'about.html');
            getFileContent(filePath, res);
        },
        '/contact': (req, res) => {
            const filePath = path.join(__dirname, 'views', 'contact.html');
            getFileContent(filePath, res);
        }
    },
    'POST': {
        '/contact': (req, res) => {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                console.log('Received POST data:', body);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end('<h1>Form submitted successfully</h1>');
            });
        }
    }
};

module.exports = routes;
