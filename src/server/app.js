const express = require("express");
const userRoutes = require('../routes/userRoutes');
const app = express();

app.use("/users", userRoutes);

module.exports = app;