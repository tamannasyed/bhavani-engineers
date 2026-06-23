const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String,
}, { timestamps: true });

module.exports = mongoose.model("Services", serviceSchema);