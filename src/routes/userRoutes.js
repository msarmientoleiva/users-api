const express = require('express');

const userController = require('../controllers/userControllers')

const router = express.Router();

router.get("/", userController.welcome)
router.post("/user", userController.createUser)

module.exports = router;