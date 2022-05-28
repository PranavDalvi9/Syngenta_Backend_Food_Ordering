const mongoose = require("mongoose");

const DishesSchema = new mongoose.Schema(
  {
    title: { type: String, require: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Dishes = mongoose.model("Zomato-Dishes", DishesSchema);
module.exports = Dishes;