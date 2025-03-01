const catchError = (fn) => {
  return function (req, res, next) {
    const resp = fn(req, res, next);
    if (resp instanceof Promise) {
      return resp.catch(next);
    }
    return resp;
  };
};

const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "API url does not exist!!",
  });
};

const developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || "";
  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      "<mark>$&</mark>"
    ),
  };

  res.status(500).json({
    success: false,
    message: "Oops ! Error in Server",
    error: errorDetails,
  });
};

const productionErrors = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Oops ! Error in Server",
  });
};

export { catchError, notFound, developmentErrors, productionErrors };
