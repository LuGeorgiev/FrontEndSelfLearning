const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../data/User');

module.exports = (settings) => {
    mongoose.connect(settings.db)
    let db = mongoose.connection;
    db.once('open', (err) => {
        if (err) {
            throw err;
        }
        User.seedAdminUser()
            .then(() => {
                console.log('MongoDb is ready!');
            }).catch((reason) => {
                console.log('Sth with Db or User went wrong mate!' + reason);
            });
    })
    db.on('error', (err) => console.log('Database error' + err));
}