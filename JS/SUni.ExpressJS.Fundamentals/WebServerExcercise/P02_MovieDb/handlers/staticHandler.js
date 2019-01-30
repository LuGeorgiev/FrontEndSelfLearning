const allowedStaticFiles = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    //'.ico': 'image/x-icon'
};

module.exports = (req, res) => {
    let pathname = req.urlData.pathname;
    let isGetRequest = req.method === "GET";
    let isPublicFile = pathname.startsWith('/public/');

    let isAllowedFileTypes = Object
        .keys(allowedStaticFiles)
        .map(k => pathname.endsWith(k))
        .reduce((acc, cur) => acc || cur, false);


    if (pathname == '/favicon.ico' && isGetRequest) {
        res.staticFile(`/public/images/favicon.ico`, 'image/x-icon');
    } else if (isGetRequest && isPublicFile && isAllowedFileTypes) {
        res.staticFile(pathname, getContentType(pathname));
    } else {
        return true;
    }
};

function getContentType(pathName) {
    return Object
        .keys(allowedStaticFiles)
        .filter(x => pathName.endsWith(x))
        .map(x => allowedStaticFiles[x])[0];
}