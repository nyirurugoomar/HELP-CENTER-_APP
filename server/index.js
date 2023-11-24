const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();

const PORT = 3000;
const app = express();

mongoose

  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB is connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
