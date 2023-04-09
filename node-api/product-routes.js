const express = require("express");
const ProductService = require("./service/product-service");


class ProductRoutes {


  static setup(root) {
    const productRouter = express.Router();

    productRouter.get("/products", async (req, res, next) => {
      try {
        const products = await ProductService.getAllProducts();
        res.status(200).send(products)
      } catch (error) {
        next(error);
        res.status(400).send(error.message);
      }
    })


    productRouter.get("/product/:name", async (req, res, next) => {
      const { params: { name } } = req;
      try {
        let product = await ProductService.getProduct(name);
        res.status(200).send(product)
      } catch (error) {
        next(error);
        res.status(400).send(error.message);
      }
    })


    root.use(productRouter);
  }
}


module.exports = ProductRoutes;
