const express = require("express");
const morgan = require("morgan");

const userRoutes = require('../routes/userRoutes');
const connectDB = require('../database/db');

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(userRoutes);

module.exports = app;