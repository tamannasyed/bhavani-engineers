const Visit = require("./models/Visit");
const express = require("express");

const cors = require("cors");
const connectDB = require("./database/db");

const contactRoutes = require("./routes/contactRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Bhavani Engineers Backend is Running");
});

app.use("/api/contact", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);

const PORT = 5000;
app.get("/api/visit", async (req, res) => {
  let visit = await Visit.findOne();

  if (!visit) {
    visit = await Visit.create({ count: 1 });
  } else {
    visit.count = visit.count + 1;
    await visit.save();
  }

  res.json({ views: visit.count });
});

app.get("/api/views", async (req, res) => {
  const visit = await Visit.findOne();

  res.json({
    views: visit ? visit.count : 0,
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});