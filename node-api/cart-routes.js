const express = require("express");
const CartService = require("./service/cart-service");

class CartRoutes {


  static setup(root) {
    const cartRouter = express.Router();

    cartRouter.post("/purchase", async (req, res, next) => {
      try {
        const { body } = req;
        const result = await CartService.purchase(body);
        if (result?._id) {
          res.status(200).send({ success: true, message: 'Product successfully purchased' });
        } else {
          res.status(200).send({ success: false, message: 'Unkown Error!' });
        }
      } catch (error) {
        res.status(400).send(error.message);
        next(error);
      }
    });

    root.use(cartRouter);
  }

}

module.exports = CartRoutes;
