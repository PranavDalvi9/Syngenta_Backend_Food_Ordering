const express = require("express");
const Order = require("../modals/orderedModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Order.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

// find all   http://localhost:2348/dishes

router.get("", async (req, res) => {
  try {
    const data = await Order.find().populate({path: "order"}).lean().exec();
    console.log(data);
    
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});





module.exports = router;


