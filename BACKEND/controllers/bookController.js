const Book = require('../models/book');

function filterBookFields(books) {
  return books.map(book => {
    const { borrower, quantity, ...rest } = book;
    return rest;
  });
}

const addBook = async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    quantity: req.body.quantity,
    genre: req.body.genre,
    availabilityStatus: req.body.availabilityStatus || true,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    const booksList = filterBookFields(books.map(item => item._doc));
    // console.log(booksList)
    res.status(200).json(booksList)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    book.name = req.body.name;
    book.author = req.body.author;
    book.availabilityStatus = req.body.availabilityStatus || book.availabilityStatus;

    await book.save();
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    await book.remove();
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };
