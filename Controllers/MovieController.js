const Movie = require("../Models/Movie");

const addMovie = async (req, res, next) => {
  try {
    const { name, releaseDate, description } = req.body;
    const newMovie = await Movie.create({
      name,
      releaseDate,
      description,
    });
    console.log("created movie");
    res.json({ status: true, newMovie });
  } catch (error) {
    next(error);
  }
};
module.exports = { addMovie };
