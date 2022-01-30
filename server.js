require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

//middleware
app.use(express.json());

// routes
const subscribersRoutes = require("./routes/subscribers");
app.use("/subscribers", subscribersRoutes);

app.listen(3000, () => {
  console.log("server started");
});
