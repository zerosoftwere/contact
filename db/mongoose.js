const mongoose = require("mongoose");

mongoose
  .connect("", {})
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((e) => {
    console.log("couldn't connect to db", e);
  });
