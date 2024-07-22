const Transaction = require('../models/transaction');

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

const addTransaction = async (req, res) => {
  const transaction = new Transaction({
    userDetails: req.body.userDetails,
    bookDetails: req.body.bookDetails,
    dueDate: req.body.dueDate,
    transactionType: req.body.transactionType,
  });
  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
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

module.exports = { getAllTransactions, getTransactionById, addTransaction, updateTransaction, deleteTransaction };
