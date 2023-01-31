const express = require("express");
const database = require("./Config/db");
const errorHandler = require("./Middlewares/errorMiddleware");
const theatreRouter = require("./Routes/TheatreRouter");
const ticketRouter = require("./Routes/TicketRouter");
const showRouter = require("./Routes/ShowRouter");
const movieRouter = require("./Routes/MovieRouter");

const app = express();
const port = process.env.PORT | 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

database();

app.use("/theatre", theatreRouter);
app.use("/movie", movieRouter);
app.use("/show", showRouter);
app.use("/ticket", ticketRouter);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
