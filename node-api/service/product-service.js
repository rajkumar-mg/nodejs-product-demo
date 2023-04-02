const path = require("path");
const inventoryData = require(path.resolve(__dirname, "inventory.json"));

class ProductService {

  ProductService() { }

  static async getAllProducts() {
    return inventoryData.inventory;
  }

  static async getProduct(name) {
    const inventory = inventoryData.inventory;
    return inventory.find(x => x.productName === name);
  }

}


module.exports = ProductService;
