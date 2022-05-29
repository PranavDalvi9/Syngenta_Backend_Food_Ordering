const express = require("express");
const cors = require("cors");

const connect = require("./configs/db");

const app = express();
app.use(express.json());

let port = process.env.PORT || 2348;

const dishesApi = require("./controllers/dishesController");
const resturant = require("./controllers/ResturantController")
const cart = require("./controllers/CartController")
const order = require("./controllers/OrderController")

app.use(cors());

app.use("/dishes", dishesApi);
app.use("/resturant" , resturant);
app.use("/cart" , cart);
app.use("/order" , order)

app.listen(port, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port ", port);
});
