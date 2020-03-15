const express = require("express");

//install helmet
const helmet = require("helmet");

const carsRouter = require('./cars-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong"
  });
});

server.use((req, res) => {
  res.status(404).json({
    message: "Your request is not found"
  });
});

module.exports = server;
