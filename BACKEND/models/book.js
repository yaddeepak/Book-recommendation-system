const mongoose = require('mongoose');
 
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
 
    },
    genre: {
        type: String,
    },
    publicationDate: {
        type: Date,
    },
    description: {
        type: String,
    },
    rating: {
        type: Number,
    },
    reviews: {
        type: Array,
    }
});
 
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;