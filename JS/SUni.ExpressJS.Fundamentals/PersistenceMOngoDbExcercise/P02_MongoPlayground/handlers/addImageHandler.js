const Image = require('mongoose').model('Image');
const formidable = require('formidable');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = (req, res) => {
    if (req.pathname === '/addImage' && req.method === 'POST') {
        addImage(req, res)
    } else if (req.pathname === '/delete' && req.method === 'DELETE') {
        deleteImg(req, res)
    } else {
        return true
    }
}

function addImage(req, res) {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        if (err) {
            throw (err);
        }
        fields.tagsId
            .split(',')
            .reduce((acc, cur) => {
                if (acc.includes(cur) || acc.length === 0) {
                    return acc;
                } else {
                    acc.push(cur);
                    return acc;
                }
            }, [])
            .map(ObjectId);

        const image = {
            url: fields.imageUrl,
            description: fields.description,
            tags
        }
        Image.create(image).then(image => {
            res.writeHead(302, {
                location: '/'
            });
            res.end();
        }).catch(err => {
            res.writeHead(500, {
                'content-type': 'text/plain'
            });
            res.end();
        })
    });

}