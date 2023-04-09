const path = require("path");
const Product = require("../models/product-models");
const { SecurityError } = require("../erro-types");

class ProductService {

  ProductService() { }

  static async getAllProducts() {
    try {
      const products = await Product.find({});
      return products;
    } catch (e) {
      throw new SecurityError(e);
    }
  }

  static async getProduct(name) {
    try {
      const product = await Product.find({ productName: name });
      return product;
    } catch (e) {
      throw new SecurityError("Invalid Product!");
    }
  }

}


module.exports = ProductService;
