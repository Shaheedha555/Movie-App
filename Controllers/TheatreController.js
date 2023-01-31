const Theatre = require("../Models/Theatre");

const addTheatre = async (req, res, next) => {
  try {
    const { name, location, seats } = req.body;
    console.log(name, location, seats);
    const newTheatre = await Theatre.create({
      name: name,
      location: location,
      seats: seats,
    });
    console.log("created theatre");
    res.json({ status: true, newTheatre });
  } catch (error) {
    next(error);
  }
};
module.exports = { addTheatre };
