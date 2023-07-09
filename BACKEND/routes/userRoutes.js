const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

// Create a new user account
router.post('/signup', UserController.signup);

// Log in user
router.post('/login', UserController.login);

// Log out user
router.get('/logout', verifyToken,UserController.logout);

module.exports = router;
