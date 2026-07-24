const express = require('express');
const router = express.Router();
const authsController = require('../controllers/authsController');

router.post('/register', authsController.handleRegister);
router.post('/login', authsController.handleLogin);

module.exports = router;