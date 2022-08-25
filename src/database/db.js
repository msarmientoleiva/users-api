const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Database connected successfully!');
        })
        .catch(() => {
            console.log('Error to connect');
        });
};

module.exports = connectDB;