const Book = require('../models/book');

function filterBookFields(books) {
  return books.map(book => {
    // Destructure the book object to exclude borrower and quantity
    const { borrower, quantity, ...rest } = book;
    return rest; // Return the modified book object without borrower and quantity
  });
}
const booksList = [
  {
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    availabilityStatus: true,
    quantity: 5,
    genre: 'Fiction',
    borrower: [] // Empty array for now
  },
  {
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    availabilityStatus: true,
    quantity: 3,
    genre: 'Classic',
    borrower: []
  },
  {
    name: '1984',
    author: 'George Orwell',
    availabilityStatus: false, // Book is currently unavailable
    quantity: 2,
    genre: 'Dystopian',
    borrower: []
  }
];


const getAllBooks = async (req, res) => {
  try {

    // const books = await Book.find();
    const books = filterBookFields(booksList)
    res.status(200).json({ books })
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

const addBook = async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    availabilityStatus: req.body.availabilityStatus || true,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
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
