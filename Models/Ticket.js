const mongoose = require("mongoose");
const TicketSchema = mongoose.Schema(
  {
    show: { type: mongoose.Schema.Types.ObjectId, ref: "Show", required: true },

    seatNo: { type: Number, required: true },
    customer: { type: String, required: true },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", TicketSchema);
module.exports = Ticket;
