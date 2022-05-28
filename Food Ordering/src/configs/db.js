const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://pranav:pranav123@cluster0.gvulk.mongodb.net/Zomato-Dishes?retryWrites=true&w=majority");
};
