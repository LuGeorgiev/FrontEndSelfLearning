const httpContext = require('http');
const url = require('url');

const attacheFileReader = require('./config/fileReader');
const handlers = require('./handlers');
const port = 5656;

function framework(req, res) {
    console.log(req.url);
    req.urlData = url.parse(req.url);

    attacheFileReader(res);
    for (const handler of handlers) {
        if (handler(req, res) !== true) {
            break;
        }
    }
}

let server = httpContext.createServer(framework);
server.listen(port);

console.log(`Server listening on port: ${port}`);