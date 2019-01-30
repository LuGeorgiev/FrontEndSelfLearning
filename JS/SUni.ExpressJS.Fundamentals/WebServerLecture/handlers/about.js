const fs = require('fs');

function aboutHandler(req, res) {
    if (req.path == '/about.html') {
        res.sentHtml('./about.html');
    } else {
        return true;
    }
}
module.exports = aboutHandler;