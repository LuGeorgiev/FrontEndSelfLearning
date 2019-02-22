const mongoose = require('mongoose');
const Product = require('../data/Product');
const Order = require('../data/Order');
const User = require('../data/User');

mongoose.Promise = global.Promise;


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