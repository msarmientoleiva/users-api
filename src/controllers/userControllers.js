const mongoose = require('mongoose');
const userSchema = require('../models/user');

const welcome = (req, res) => {
	res.send("Welcome to the ay ay ay");
};

const createUser = (req, res) => {
	const user = req.body;
	
	userSchema(user)
	.save()
	.then((data) =>{
		res.send("user created successfully");
	})
	.catch((err) => {
		res.status(500).send(`error: ${err}`);
	});
};

module.exports = {
	welcome,
	createUser,
};
