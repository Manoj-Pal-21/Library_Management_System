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
  const { bookId, transactionId } = req.params;

  try {
    const response = await Transaction.find({
      // issueStatus: false,
      // bookId: bookId,
      // transactionId: transactionId
    })

    console.log(response, "response")
  } catch (error) {

  }
}




module.exports = { getAcceptBook, addTransaction, getBookRequest };
