const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    dishId: {type: mongoose.Schema.Types.ObjectId, ref: "Zomato-Dishes", required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
