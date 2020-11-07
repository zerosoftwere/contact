const mongoose = require("mongoose");
const { Schema, ObjectId } = require("mongoose");

const UserSchema = new Schema({
  id: ObjectId,
  username: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
