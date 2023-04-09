const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const Products = mongoose.model("products", ProductSchema);

module.exports = Products;
