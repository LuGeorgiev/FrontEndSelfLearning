const formidable = require('formidable');
const Tag = require('mongoose').model('Tag');
const util = require('util');

module.exports = (req, res) => {
    if (req.pathname === '/generateTag' && req.method === 'POST') {
        const form = new formidable.IncomingForm();
        formidable.parse(req, (err, fields, files) => {
                res.writeHead(200, {
                    'content-type': 'text/plain'
                });
                const name = files.tagName;
                Tag.create({ //saves to db automatically
                    name,
                    images: []
                }).then(tag => {
                    res.writeHead(302, {
                        location: '/'
                    });
                }).catch(err => {
                    res.writeHead(500, {
                        'content-type': 'text-plain'
                    });
                    res.write('500 server error');
                    res.end();
                });

                res.write('receive upload:\n\n');
                res.end(util.inspect({
                    fields: fields,
                    files: files
                }))
            })
            // res.writeHead(200, {
            //         contentType: "application/json"
            //     })
            //     //Circular dependency escaping
            // const cach = [];
            // JSON.stringify(o, function(key, value) {
            //     if (typeof value === 'object' && value !== null) {
            //         if (cach.indexOf(value) !== -1) {
            //             //Duplicat reference found
            //             try {
            //                 //if value does not refference a pattern
            //                 return JSON.parse(JSON.stringify(value));
            //             } catch (error) {
            //                 //discard key
            //                 return;
            //             }
            //         }
            //         cach.push(value);
            //     }
            //     return value;
            // });
            // res.end();
    } else {
        return true
    }
}