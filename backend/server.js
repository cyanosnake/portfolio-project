const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://portfolioUser:wDbsc6LQXXqWOUEq@cluster0.i4txqhn.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const Contact = mongoose.model("Contact", {
  name: String,
  email: String,
  message: String
});

app.post("/contact", async (req, res) => {
  const data = new Contact(req.body);
  await data.save();
  res.send({ message: "Message saved to database" });
});

app.get("/", (req, res) => {
  res.send("Backend with DB running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
