const mongoose = require("mongoose");
const MovieSchema = mongoose.Schema({
  name: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  description: { type: String, required: true },
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
