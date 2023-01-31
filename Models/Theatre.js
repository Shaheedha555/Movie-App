const mongoose = require("mongoose");
const TheatreSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  seats: { type: Number, required: true },
});

const Theatre = mongoose.model("Theatre", TheatreSchema);
module.exports = Theatre;
