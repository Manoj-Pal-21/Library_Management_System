const express = require('express');
const router = express.Router();
const { getAcceptBook, addTransaction, getBookRequest, rejectBookRequest } = require('../controllers/transactionController');

const { auth } = require('../middlewares/auth')

router.post('/issueBook/:bookId', auth, addTransaction);
router.get('/getbookrequest', auth, getBookRequest);
router.put('/getacceptbook/:transactionId/:bookId', auth, getAcceptBook);
router.put('/rejectbookrequest/:transactionId', auth, rejectBookRequest);
module.exports = router;
