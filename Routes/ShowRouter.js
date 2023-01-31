const express = require("express");
const showRouter = express();
const { addShow } = require("../Controllers/ShowController");

showRouter.post("/", addShow);
module.exports = showRouter;
