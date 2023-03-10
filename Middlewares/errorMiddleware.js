const errorHandler = (err, req, res, next) => {
  console.log("err middleware");
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(err.message + " error msg");
  res.status(statusCode).json({
    status: false,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorHandler;
