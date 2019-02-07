const mongoose = require('mongoose');
mongoose.Promise = global.Promisel

require('../models/ImageSchema');
require('../models/TagSchema');

const connectionString = 'mongodb://localhost:27017/mongoplayground';

module.exports = mongoose.connect(connectionString);