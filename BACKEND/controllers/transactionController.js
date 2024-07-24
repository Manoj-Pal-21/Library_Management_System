const Transaction = require('../models/transaction');

const addTransaction = async (req, res) => {

  const { userId } = req.user;
  const { bookId } = req.params;

  const newTransaction = new Transaction({
    userId: userId,
    bookId: bookId,
    issueStatus: false,
    transactionType: 'borrowed',
  });
  try {
    const transaction = await newTransaction.save();
    res.status(200).json(transaction);
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
  const { transactionId, bookId } = req.params;

  try {
    const transaction = await Transaction.findByIdAndUpdate(transactionId, {
      issueStatus: true,
      issueDate: new Date(),
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
