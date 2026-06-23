const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    "Architectural Planning",
    "Structural Design",
    "Property Valuation",
    "Quantity Surveying",
  ]);
});

module.exports = router;