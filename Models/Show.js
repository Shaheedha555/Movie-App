const mongoose = require("mongoose");
const ShowSchema = mongoose.Schema({
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theatre",
    required: true,
  },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const Show = mongoose.model("Show", ShowSchema);
module.exports = Show;
