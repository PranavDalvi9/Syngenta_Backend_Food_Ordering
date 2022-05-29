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

    // http://localhost:2348/dishes?hotel=6292292db89c2967f7bb06c2&location=Dadar
    if(req.query.hotel && req.query.location){
      const filter1 = data.filter((e) => e.resturant._id == req.query.hotel);
      const locationfilter = filter1.filter((e) => e.location == req.query.location)
      return res.send(locationfilter);
    }
    
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;


