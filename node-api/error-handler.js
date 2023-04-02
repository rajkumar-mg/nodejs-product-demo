const { OutOfStockError, SecurityError } = require("./erro-types");

const errorHandler = (error, req, res, next) => {
  if (error instanceof SecurityError) {
    res.status(401).send(error.message);
  } else if (error instanceof OutOfStockError) {
    res.status(200).send({ success: false, message: "Product is no longer available" });
  } else {
    const errMsg = error?.message || "Internal server error";
    res.status(500).send(errMsg)
  }
}


module.exports = errorHandler;