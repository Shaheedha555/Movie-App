const express = require("express");
const movieRouter = express();
const { addMovie } = require("../Controllers/MovieController");

movieRouter.post("/", addMovie);
module.exports = movieRouter;
