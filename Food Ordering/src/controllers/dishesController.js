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



// http://localhost:2348/product/earings  category sorting
// http://localhost:2348/product   all products

// http://localhost:2348/product/earings?rating=4  rating filter

// http://localhost:2348/product/earings?rating=4&discount=11  discount
// https://diamond-ecommerce.herokuapp.com/