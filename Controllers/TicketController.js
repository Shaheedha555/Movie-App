const Ticket = require("../Models/Ticket");
const Theatre = require("../Models/Theatre");
const Movie = require("../Models/Movie");

const getAllBookedSeats = async (req, res, next) => {
  try {
    const { show } = req.params;
    const tickets = await Ticket.find({ show });
    const seatNumbers = tickets.map((ticket) => ticket.seatNo);
    res.json({ seatNumbers });
  } catch (error) {
    next(error);
  }
};

const bookTicket = async (req, res, next) => {
  try {
    const { show, seatNo, customer } = req.body;
    const booking = await Ticket.findOne({ seatNo: seatNo });
    if (booking) {
      console.log("already seat booked");
      res.json({ status: false, message: "already booked" });
    }
    const newBooking = await Ticket.create({ show, seatNo, customer });
    res.json({ status: true, newBooking });
  } catch (error) {
    next(error);
  }
};
const rescheduleTicket = async (req, res, next) => {
  try {
    const { show, seatNo, ticketID } = req.body;
    const booking = await Ticket.findOne({ seatNo: seatNo });
    if (booking) {
      console.log("already seat booked");
      res.json({ status: false, message: "already booked" });
    }
    const newBooking = await Ticket.updateOne({ ticketID }, { show, seatNo });
    res.json({ status: true, newBooking });
  } catch (error) {
    next(error);
  }
};
const getMovies = async (req, res, next) => {
  try {
    const { search } = req.query;
    console.log(search.trim());
    const query =
      search.trim() !== ""
        ? { name: { $regex: "^" + search, $options: "i" } }
        : {};
    console.log(query, "  query");
    const movies = await Movie.find(query);
    res.json(movies);
  } catch (error) {
    next(error);
  }
};
const getTheatres = async (req, res, next) => {
  try {
    const { search } = req.query;
    console.log(search.trim());
    const query =
      search.trim() !== ""
        ? { location: { $regex: "^" + search, $options: "i" } }
        : {};
    console.log(query, "  query");
    const theatres = await Theatre.find(query);
    res.json(theatres);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  bookTicket,
  rescheduleTicket,
  getMovies,
  getTheatres,
  getAllBookedSeats,
};
