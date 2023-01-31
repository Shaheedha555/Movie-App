const express = require("express");
const theatreRouter = express();
const { addTheatre } = require("../Controllers/TheatreController");

theatreRouter.post("/", addTheatre);

module.exports = theatreRouter;
