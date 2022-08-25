const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        require: true,
        type: String,
    },
    lastname: {
        require: true,
        type: String,
    },
    nickname: {
        require: true,
        type: String,
        unique: true,
    },
    email: {
        require: true,
        type: String,
        unique: true,
    },
    password: {
        require: true,
        type: String,
    },
})

module.exports = mongoose.model("users", userSchema);