const userSchema = require('../models/user');
const registerValidationSchema = require('../validations/registerSchema');

const createUser = async (req, res) => {
	const user = req.body;
	registerValidationSchema
		.validate(user);
	await userSchema(user)
		.save()
		.then((data) => {
			res.send("user created successfully");
		})
		.catch((err) => {
			res.status(500).send(`error: ${err}`);
		});
};

const findUsers = async (req, res) => {
	const users = await userSchema
		.find({})
		.then(() => {
			res.json({
				users
			});
		})
		.catch((err) => {
			res.status(500).send(`error: ${err}`);
		})
};

const findUsersById = async (req, res) => {
	//const id = req.params.id;
	const { id } = req.params;

	const users = await userSchema
		.findById(id)
		.then((data) => {
			res.json({
				data
			})
		})
		.catch((err) => {
			res.status(500).send(`error: ${err}`);
		})
};

const findUsersByName = async (req, res) => {
	const { name } = req.body;

	const users = await userSchema.find({ name });

	res.json({
		users
	});
};

module.exports = {
	createUser,
	findUsers,
	findUsersById,
	findUsersByName,
};
