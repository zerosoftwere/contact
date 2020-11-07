const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://thembeats:thembeats212@cluster0.8epra.mongodb.net/test",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((e) => {
    console.log("couldn't connect to db", e);
  });
