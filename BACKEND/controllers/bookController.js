const Book = require('../models/book');
const Transaction = require('../models/transaction');

function filterBookFields(books) {
  return books.map(book => {
    const { borrower, ...rest } = book;
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
    res.status(200).json(booksList)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getIssuedBooks = async (req, res) => {
  try {
    const response = await Transaction.find({
      userId: req.user.userId
    }).populate([
      { path: 'bookId', select: 'name' }
    ]);

    res.status(200).json(response)
  } catch (error) {
    console.log(error)
  }
}


module.exports = { getAllBooks, addBook, getIssuedBooks };
