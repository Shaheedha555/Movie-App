const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const database = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = database;
