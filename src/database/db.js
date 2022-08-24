const mongoose = require('mongoose');

const uri = 'mongodb+srv://maeusale:maeusale1997@userapi.k7uv4m6.mongodb.net/?retryWrites=true&w=majority';

const connectDB = () => {
    mongoose
        .connect(uri)
        .then(() => {
            console.log('Database connected successfully!');
        })
        .catch(() => {
            console.log('Error to connect');
        });
};

module.exports = connectDB;