const mongoose = require('mongoose');

const bookScehma = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String },
    releaseDate: { type: Date, required: true },
    imageUrl: { type: String, required: true }
})
mongoose.model('Book', bookScehma);

module.exports = mongoose.model('Book');