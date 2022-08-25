const express = require('express');

const userController = require('../controllers/userControllers');

const router = express.Router();

router.get("/users", userController.findUsers);
router.get("/user", userController.findUsersByName);
router.get("/user/:id", userController.findUsersById);

router.post("/user", userController.createUser);

module.exports = router;