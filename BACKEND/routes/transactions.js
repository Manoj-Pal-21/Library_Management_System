const express = require('express');
const router = express.Router();
const { getAllTransactions, getTransactionById, addTransaction, updateTransaction, deleteTransaction, getBookRequest } = require('../controllers/transactionController');

const { auth } = require('../middlewares/auth')

router.post('/issueBook/:bookId', auth, addTransaction);
router.get('/getbookrequest', auth, getBookRequest);
router.get('/', getAllTransactions);
router.get('/:id', getTransactionById);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
