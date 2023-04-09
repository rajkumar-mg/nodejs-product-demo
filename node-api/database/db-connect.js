


const mongoose = require('mongoose');
const { SecurityError } = require('../erro-types');
const databaseURL = `mongodb://localhost:27017/product-demo`;

const setUpDataBase = async () => {
    try {
        await mongoose.connect(
            databaseURL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    } catch (error) {
        throw new SecurityError(error);
    }
}

module.exports = setUpDataBase;