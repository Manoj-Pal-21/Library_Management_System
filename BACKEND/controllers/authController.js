const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id, user.username, user.isAdmin);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const signup = async (req, res) => {
  const { username, password, isAdmin } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const validatedIsAdmin = isAdmin === true || isAdmin === 'true';

    const newUser = new User({
      username,
      password: hashedPassword,
      isAdmin: validatedIsAdmin
    });

    await newUser.save();

    const token = generateToken(newUser._id, newUser.username, newUser.isAdmin);
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { login, signup };
