const http = require('http');
const url = require('url');
const fs = require('fs');
const handlers = require('./handlers/index');
const port = 5000;

const server = http.createServer(frontController);

// /**enter

/**
 * 
 * @param {http.ClientRequest} req 
 * @param {http.ClientResponse} res 
 */

function frontController(req, res) {
    req.path = url.parse(req.url).pathname;
    res.sendHtml = (path) => {
        fs.readFile(path, 'utf8', (err, data) => {

            res.writeHead(200, {
                'content-type': 'text-html'
            });
            res.write(data);
            res.end();
        });
    }

    for (const handler of handlers) {
        if (handler(req, res) !== true) {
            break;
        }
    }

}

server.listen(port);
console.log(`Listen on port: ${port}..`);