const Book = require("../models/book");

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Search books by title, author, or genre
exports.searchBooks = async (req, res) => {
  try {
    const { query } = req.query;

    // Use regular expressions to perform a case-insensitive search
    const searchRegex = new RegExp(query, "i");

    const books = await Book.find({
      $or: [
        { title: searchRegex },
        { author: searchRegex },
        { genre: searchRegex },
      ],
    });

    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Get detailed information about a book
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, genre, publicationDate, description } = req.body;

    const newBook = new Book({
      title,
      author,
      genre,
      publicationDate,
      description,
    });

    const savedBook = await newBook.save();

    res
      .status(201)
      .json({ message: "Book created successfully", book: savedBook });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Rate and review a book
exports.rateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, review } = req.body;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const newRating = {
      user: req.session.user,
      rating,
      review,
    };

    book.ratings.push(newRating);

    const savedBook = await book.save();

    res
      .status(201)
      .json({
        message: "Book rated and reviewed successfully",
        book: savedBook,
      });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};
