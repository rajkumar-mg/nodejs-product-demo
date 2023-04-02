const { OutOfStockError, SecurityError } = require("./erro-types");

class ErrorService {
  ErrorService() { }


  static throwOutOfStockError(product) {
    throw new OutOfStockError(`we are out of ${product}`);
  }
}


module.exports = ErrorService;