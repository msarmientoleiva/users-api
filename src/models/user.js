const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    lastname: {
        required: true,
        type: String,
    },
    nickname: {
        required: true,
        type: String,
        unique: true,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    },
})

module.exports = mongoose.model("users", userSchema);