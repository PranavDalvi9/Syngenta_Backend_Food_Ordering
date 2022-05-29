const express = require("express");
const Dishes = require("../modals/dishesModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Dishes.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

// find all   http://localhost:2348/dishes

router.get("", async (req, res) => {
  try {
    console.log("query" , req.query)
    const data = await Dishes.find().populate({path :"resturant", select:["_id" ,"resturant"]}).lean().exec(); 
    // console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;


