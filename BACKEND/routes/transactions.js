const express = require('express');
const router = express.Router();
const { getAllTransactions, getTransactionById, addTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactionController');
const { isAdmin } = require('../middlewares/authMiddleware');

router.get('/', isAdmin, getAllTransactions);
router.get('/:id', isAdmin, getTransactionById);
router.post('/', isAdmin, addTransaction);
router.put('/:id', isAdmin, updateTransaction);
router.delete('/:id', isAdmin, deleteTransaction);

module.exports = router;
