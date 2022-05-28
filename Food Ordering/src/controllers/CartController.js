const express = require("express");
const Cart = require("../modals/cartModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Cart.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

// find all   http://localhost:2348/dishes

router.get("", async (req, res) => {
  try {
    const data = await Cart.find().populate({path: "dishId", select:["_id","name", "location" , "category"]}).lean().exec();
    console.log(data);
    
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});





module.exports = router;


