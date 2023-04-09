const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const errorHandler = require("./error-handler");
const { logRequest, logError } = require('./logger');
const ProductRoutes = require("./product-routes");
const CartRoutes = require("./cart-routes");
const apiRoutes = express.Router();
const initDBSetup = require("./database/db-connect");

const app = express();
const port = process.env.PORT || 3030;
app.use(cors())
app.use(logRequest);

app.use(bodyParser.json());

ProductRoutes.setup(apiRoutes);

CartRoutes.setup(apiRoutes);

app.use("/api", apiRoutes);

initDBSetup();

app.get("/", (req, res) => {
  res.send("Welcome to product server 1.0.0");
});


app.listen(port, (req, res) => {
  console.log(
    `product server started from nodemon and listening at http://localhost:${port}`
  );
});

app.use(logError)

app.use(errorHandler);

process.on("uncaughtException", (error, origin) => {
  console.log(error, origin)
  process.exit(1)
})