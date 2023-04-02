class OutOfStockError extends Error {
  constructor(...params) {
    super(...params);


    this.name = "OutOfStockError";
  }
}


class SecurityError extends Error {
  constructor(...params) {
    super(...params);


    this.name = "SecurityError";
  }
}


module.exports = { OutOfStockError, SecurityError }