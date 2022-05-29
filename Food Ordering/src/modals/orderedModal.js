const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    order: {type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
