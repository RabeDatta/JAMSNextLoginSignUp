const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/authRoute");
const cors = require("cors");
require("dotenv").config();

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 5004;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port);
    console.log(`Database is connected! Listening to localhost ${port}`);
  })
  .catch((err) => console.log(err));
