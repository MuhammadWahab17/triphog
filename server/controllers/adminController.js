const Admin = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Helper function to create and send token via cookie
const createSendToken = (admin, statusCode, res) => {
  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  // Convert JWT_COOKIE_EXPIRES_IN to a number and calculate milliseconds
  const cookieExpiresIn = parseInt(process.env.JWT_COOKIE_EXPIRES_IN, 10) || 90; // default to 90 days if not set

  const cookieOptions = {
    expires: new Date(Date.now() + cookieExpiresIn * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
  };

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  admin.password = undefined;

  res.status(statusCode).json({
    status: "success",
    data: {
      admin,
    },
  });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    // Find the admin by email
    const admin = await Admin.findOne({ email }).select("+password");

    // Check if admin exists and password is correct
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    // If everything ok, send token to client
    createSendToken(admin, 200, res);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred during login",
    });
  }
};

// Optional: Add a controller to get the current user's info
exports.getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id);
    res.status(200).json({
      status: "success",
      data: {
        admin,
      },
    });
  } catch (error) {
    console.error("Get me error:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching user data",
    });
  }
};

// Middleware to protect routes
exports.protect = async (req, res, next) => {
  try {
    let token;
    if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    console.log("Token:", token);

    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in. Please log in to get access.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    // Check if admin still exists
    const currentAdmin = await Admin.findById(decoded.id);
    console.log("Current admin:", currentAdmin);

    if (!currentAdmin) {
      return res.status(401).json({
        status: "fail",
        message: "The admin belonging to this token no longer exists.",
      });
    }

    // Grant access to protected route
    req.admin = currentAdmin;
    console.log("Admin attached to request:", req.admin);
    next();
  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).json({
      status: "fail",
      message: "Invalid token. Please log in again.",
    });
  }
};

// Logout function to clear the cookie
exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};
