// The error middleware is a middleware that handles errors. It is a function that takes in three parameters: err, req, res, and next. The err parameter is the error that is thrown. The req parameter is the request object. The res parameter is the response object. The next parameter is a function that is used to move to the next middleware. The error middleware is used in the backend/server.js file.

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
