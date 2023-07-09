require("dotenv").config();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// Sign up a new user
exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    
    if (existingUser) {
      return res.status(201).json({ message: "Username already exists" });
    }

    // Create a new user object
    const newUser = new User({ username, password });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({ message: "User created successfully" });

  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Log in user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY,{expiresIn:'1hr'});
    
    console.log(token);
    // Set the JWT token as a cookie
    res.cookie("token", token,{
        httpOnly: true,
    })
    .status(200)
    .json({ message: "User logged in successfully 👌",token:token});

  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Log out user

exports.logout = async (req, res) => {
    return res
    .clearCookie("token")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
};

