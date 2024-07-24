const express = require('express');
const router = express.Router();
const { updateIssueRequest, addTransaction, getBookRequest, deleteTransation } = require('../controllers/transactionController');

const { auth } = require('../middlewares/auth')

router.post('/issueBook/:bookId', auth, addTransaction);
router.get('/getbookrequest', auth, getBookRequest);
router.put('/issueAction/:transactionId', auth, updateIssueRequest);
router.delete('/deletetransaction/:transactionId', auth, deleteTransation);
module.exports = router;
