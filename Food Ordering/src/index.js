const express = require("express");
const cors = require("cors");

const connect = require("./configs/db");

const app = express();
app.use(express.json());

let port = process.env.PORT || 2348;


const dishesApi = require("./controllers/dishesController")
 
app.use(cors());

app.use("/dishes", dishesApi);

app.listen(port, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
