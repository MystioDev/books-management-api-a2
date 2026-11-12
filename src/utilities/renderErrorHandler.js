const renderErrorHandler = (err, res) => {
  return res.status(500).json({
    message: err.message || "Something went wrong!",
    // message: err.message ? err.message : "Something went wrong (part 2)!",
  });
};

module.exports = renderErrorHandler;
