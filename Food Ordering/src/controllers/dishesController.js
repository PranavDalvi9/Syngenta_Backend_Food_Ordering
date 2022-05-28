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

// find all   http://localhost:2345/product

router.get("", async (req, res) => {
  try {
    const data = await Dishes.find().lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});





module.exports = router;


