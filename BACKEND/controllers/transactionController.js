const Transaction = require('../models/transaction');
const Book = require('../models/book');
const { default: mongoose } = require('mongoose');


const addTransaction = async (req, res) => {
  const { userId } = req.user;
  const { bookId } = req.params;

  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    if (book.quantity <= 0) {
      return res.status(400).json({ error: 'Book out of stock' });
    }

    const newTransaction = new Transaction({
      userId: userId,
      bookId: bookId,
      issueStatus: false,
      transactionType: 'borrowed',
    });

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const transaction = await newTransaction.save({ session });
      book.quantity--;

      if (book.quantity === 0) {
        book.availabilityStatus = false;
      }

      await book.save({ session });
      await session.commitTransaction();
      res.status(200).json(transaction);
    } catch (err) {
      await session.abortTransaction();
      throw err;
    } finally {
      session.endSession();
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getBookRequest = async (req, res) => {
  try {
    const response = await Transaction.find({
      transactionType: "borrowed",
      issueStatus: false
    })
      .populate([
        { path: 'userId', select: 'name' },
        { path: 'bookId', select: 'name' }
      ]);

    res.status(200).json(response);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAcceptBook = async (req, res) => {
  const { transactionId } = req.params;

  try {
    const currentDate = new Date();
    const dueDate = new Date(currentDate);

    dueDate.setMonth(dueDate.getMonth() + 1);

    const transaction = await Transaction.findByIdAndUpdate(transactionId, {
      issueStatus: true,
      issueDate: new Date(),
      dueDate: dueDate
    }, { new: true });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (error) {
    console.error('Error accepting book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const rejectBookRequest = async (req, res) => {
  const { transactionId } = req.params;

  try {
    const transaction = await Transaction.findByIdAndUpdate(transactionId, {
      issueStatus: false,
    }, { new: true });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (error) {
    console.error('Error rejecting book request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = { getAcceptBook, addTransaction, rejectBookRequest, getBookRequest };
