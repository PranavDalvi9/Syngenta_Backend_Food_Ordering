const mongoose = require("mongoose");

const ResturantSchema = new mongoose.Schema(
  {
    resturant: { type: String, require: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Resturant = mongoose.model("Resturant-name", ResturantSchema);
module.exports = Resturant;
