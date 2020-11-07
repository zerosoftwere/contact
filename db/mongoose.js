const mongoose = require("mongoose");

function initialize() {
    try {
        const db = mongoose.connect(
            "mongodb+srv://thembeats:thembeats212@cluster0.8epra.mongodb.net/test",
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Database successfully connected");
    } catch (error) {
        console.log("couldn't connect to db", e);
    } 
}

module.exports = { initialize }
