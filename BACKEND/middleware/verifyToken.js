const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token)
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      req.userId = decoded.userId;
      next();
    });
};
module.exports = verifyToken;