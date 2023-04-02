const path = require("path");
const inventoryData = require(path.resolve(__dirname, "inventory.json"));
const ErrorService = require("../error-gen-service");

class CartService {

  CartService() { }

  static async purchase(cartItems) {
    
    if (!cartItems || cartItems.length === 0) {
      throw new TypeError("You need atleast one product required for purchase!");
    }

    let billAmount = 0;
    const inventory = await inventoryData.inventory;

    for (const eachProd of cartItems) {

      const product = inventory.find(x => x.productName === eachProd.productName);
      if (!product) {
        throw new SyntaxError("Product provided is invalid!");
      }


      if (product.quantity === 0) {
        throw ErrorService.throwOutOfStockError(product.productName);
      }

      billAmount = billAmount + product.price * eachProd.purchasedQty;
    }

    return true;
  }

}


module.exports = CartService;
