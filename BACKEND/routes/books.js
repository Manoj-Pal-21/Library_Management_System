const express = require('express');
const router = express.Router();
const { getAllBooks, addBook, getIssuedBooks} = require('../controllers/bookController');
const { auth } = require('../middlewares/auth');


router.get('/', getAllBooks);
router.post('/add', auth, addBook);
router.get('/getIssuedBooks', auth, getIssuedBooks)


module.exports = router;
