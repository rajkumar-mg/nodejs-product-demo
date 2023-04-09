const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
    billAmount: {
        type: Number,
        required: true,
    }
});

const Orders = mongoose.model("orders", OrdersSchema);

module.exports = Orders;