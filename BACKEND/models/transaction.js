const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userDetails: { type: String, required: true }, // Example: userId or username
  bookDetails: { type: String, required: true }, // Example: bookId or book name
  dueDate: { type: Date, required: true },
  transactionType: { type: String, enum: ['borrowed', 'returned'], required: true },
},{
  timestamps: true 
});

module.exports = mongoose.model('Transaction', transactionSchema);
