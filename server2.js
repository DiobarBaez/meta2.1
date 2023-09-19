const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/datos') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Request Headers:</h1>');
            res.write(`<pre>${JSON.stringify(req.headers, null, 2)}</pre>`);
            res.write('<h2>Método: GET</h2>');
            res.write(`<h2>URL: ${parsedUrl.pathname}${parsedUrl.search}</h2>`);
            res.end();
        } else if (req.method === 'POST') {
            let data = '';
            req.on('data', chunk => {
                data += chunk.toString();
            });

            req.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>Request Headers:</h1>');
                res.write(`<pre>${JSON.stringify(req.headers, null, 2)}</pre>`);
                res.write('<h2>Método: POST</h2>');
                res.write(`<h2>Datos enviados: ${data}</h2>`);
                res.end();
            });
        }
    } else if (parsedUrl.pathname === '/get.html') {
        fs.readFile('get.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (parsedUrl.pathname === '/post.html') {
        fs.readFile('post.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000/');
});
