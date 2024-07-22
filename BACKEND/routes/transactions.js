const express = require('express');
const router = express.Router();
const { getAllTransactions, getTransactionById, addTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactionController');

router.get('/', getAllTransactions);
router.get('/:id', getTransactionById);
router.post('/', addTransaction);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
