const Show = require("../Models/Show");
const addShow = async (req, res, next) => {
  try {
    const { theatre, movie, time, date } = req.body;
    const newShow = await Show.create({
      theatre,
      movie,
      time,
      date,
    });
    console.log("created show");
    res.json({ status: true, newShow });
  } catch (error) {
    next(error);
  }
};
module.exports = { addShow };
