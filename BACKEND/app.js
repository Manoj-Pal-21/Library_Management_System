const express = require('express');
const bodyParser = require('body-parser');
const connectToMongoDB = require('./connection/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes//auth');
const path = require('path');
const booksRoutes = require('./routes/books');
const transactionsRoutes = require('./routes/transactions');
const cors = require('cors');
dotenv.config();

const app = express();

app.use(cors())

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("server is running")
})

app.use('/api/auth', authRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/transactions', transactionsRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
