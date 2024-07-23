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


const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

    transaction.dueDate = req.body.dueDate || transaction.dueDate;
    await transaction.save();
    res.json(transaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

    await transaction.remove();
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllTransactions, getTransactionById, addTransaction, updateTransaction, deleteTransaction, getBookRequest };
