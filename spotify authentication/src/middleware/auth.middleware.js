const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function authMiddleware(req, res, next) {
  try {
    // 1. Get token from cookies or authorization header
    let token = req.cookies?.token;

    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        message: "Access denied. Please log in to continue.",
      });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user to request
    const user = await userModel.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({
        message: "User no longer exists.",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token.",
      error: err.message,
    });
  }
}

module.exports = authMiddleware;
