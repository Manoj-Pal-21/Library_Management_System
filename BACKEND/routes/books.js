const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookController');
const { auth } = require('../middlewares/auth');


router.get('/', getAllBooks);

router.get('/:id', auth, getBookById);
router.post('/add', auth, addBook);
router.put('/:id', auth, updateBook);
router.delete('/:id', auth, deleteBook);

module.exports = router;
