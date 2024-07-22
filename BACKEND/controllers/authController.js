const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { generateTokenAndSetCookie } = require('../utils/generateToken')

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

    const isMatch = bcrypt.compare(password, user?.password || '');
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateTokenAndSetCookie(user._id, user.isAdmin, res);

    res.status(200).json({ token, isAdmin: user.isAdmin, message: "Login Successfull" })

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

    const validatedIsAdmin = isAdmin === true || isAdmin === 'true';


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      password: hashedPassword,
      isAdmin: validatedIsAdmin
    });

    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = { login, signup };
