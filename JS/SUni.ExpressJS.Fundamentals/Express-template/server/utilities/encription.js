const crypto = require('crypto');

module.exports = {
    generateSalt: () =>
        crypto.randomBytes(128).toString('base64'),
    generateHashedPass: (salr, password) =>
        crypto.createHash('sha256', salt).update(password).digest('hex')
}