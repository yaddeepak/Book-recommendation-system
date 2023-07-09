const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');
const verifyToken=require('../middleware/verifyToken');

// Get all books
router.get('/books',verifyToken,BookController.getAllBooks);

// Search books by title, author, or genre
router.get('/books/search', verifyToken, BookController.searchBooks);

// Get detailed information about a book
router.get('/books/:id',verifyToken, BookController.getBookById);

// Create a new book
router.post('/books', verifyToken, BookController.createBook);

// Rate and review a book
router.post('/books/:id/ratings', verifyToken,BookController.rateBook);


module.exports = router;
