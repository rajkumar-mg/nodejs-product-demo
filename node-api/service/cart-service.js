const Orders = require("../models/orders-models");
const Product = require("../models/product-models");
const ErrorService = require("../error-gen-service");

class CartService {

  CartService() { }

  static async purchase(cartItems) {

    if (!cartItems || cartItems.length === 0) {
      throw new TypeError("You need atleast one product required for purchase!");
    }

    let billAmount = 0;

    for (const eachProd of cartItems) {

      const allProducts = await Product.find({});
      const product = allProducts.find(x => x.productName === eachProd.productName);
      if (!product) {
        throw new SyntaxError("Product provided is invalid!");
      }

      if (product.quantity === 0) {
        throw ErrorService.throwOutOfStockError(product.productName);
      }

      billAmount = billAmount + product.price * eachProd.purchasedQty;
    }
    const orders = new Orders({
      customerId: 'test-customer-123',
      products: cartItems,
      billAmount: billAmount
    });
    return orders.save().then((resp) => {
      return resp;
    }).catch((err) => {
      return err;
    });

  }

}


module.exports = CartService;
