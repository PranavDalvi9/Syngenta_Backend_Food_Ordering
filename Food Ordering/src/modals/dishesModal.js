const mongoose = require("mongoose");

const DishesSchema = new mongoose.Schema(
  {
    resturant: { type: String, require: true },
    name: { type: String, require: true },
    location: { type: String, require: true },
    category: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Dishes = mongoose.model("Zomato-Dishes", DishesSchema);
module.exports = Dishes;
