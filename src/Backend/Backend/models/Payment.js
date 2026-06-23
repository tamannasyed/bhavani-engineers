const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  amount: Number,
  status: {
    type: String,
    default: "pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);