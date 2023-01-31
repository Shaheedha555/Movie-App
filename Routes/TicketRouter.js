const express = require("express");
const ticketRouter = express();
const {
  bookTicket,
  rescheduleTicket,
  getMovies,
  getTheatres,
  getAllBookedSeats,
} = require("../Controllers/TicketController");

ticketRouter.post("/", bookTicket);
ticketRouter.get("/movies", getMovies);
ticketRouter.get("/theatres", getTheatres);
ticketRouter.get("/:showId", getAllBookedSeats);
ticketRouter.post("/reschedule", rescheduleTicket);
module.exports = ticketRouter;
