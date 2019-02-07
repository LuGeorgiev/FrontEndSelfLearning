const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: { type: mongoose.SchemaTypes.String, require: true },
    creationDate: { type: mongoose.SchemaTypes.Date, require: true, default: Date.now },
    images: [{ type: mongoose.SchemaTypes.ObjectId }]
});

module.exports = mongoose.model('Tag', tagSchema);