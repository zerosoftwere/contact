const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((e) => {
    console.log("couldn't connect to db", e);
  });
