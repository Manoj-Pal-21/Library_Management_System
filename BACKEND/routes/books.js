const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookController');
const { isAdmin } = require('../middlewares/authMiddleware');

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', isAdmin, addBook);
router.put('/:id', isAdmin, updateBook);
router.delete('/:id', isAdmin, deleteBook);

module.exports = router;
