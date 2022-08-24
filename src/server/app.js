const express = require("express");

const userRoutes = require('../routes/userRoutes');
const connectDB = require('../database/db');

const app = express();

connectDB();

app.use("/users", userRoutes);

module.exports = app;