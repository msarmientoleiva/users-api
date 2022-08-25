const express = require('express');

const userController = require('../controllers/userControllers')

const router = express.Router();

router.post("/user", userController.createUser)

module.exports = router;