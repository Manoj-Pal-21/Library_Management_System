const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  // console.log(req)
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json({ message: 'Invalid token' });

    // if (!decoded.isAdmin) return res.status(403).json({ message: 'Admin access required' });

    req.user = {
      userId: decoded.userId,
      isAdmin: decoded.isAdmin,
    }
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { auth };




