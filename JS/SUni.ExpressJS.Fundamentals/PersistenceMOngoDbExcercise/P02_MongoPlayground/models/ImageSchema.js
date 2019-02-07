const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: { type: mongoose.SchemaTypes.String, require: true },
    creationDate: { type: mongoose.SchemaTypes.Date, require: true, default: Date.now },
    description: { ype: mongoose.SchemaTypes.String },
    tags: [{ type: mongoose.SchemaTypes.ObjectId }]
});

module.exports = mongoose.model('Image', imageSchema);