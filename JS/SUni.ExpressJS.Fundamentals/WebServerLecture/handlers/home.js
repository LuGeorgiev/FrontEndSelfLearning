const fs = require('fs');

function homeHandler(req, res) {
    if (req.path == '/' || req.path == '/index.html') {
        res.sentHtml('./index.html');
    } else {
        return true;
    }
}
module.exports = homeHandler;