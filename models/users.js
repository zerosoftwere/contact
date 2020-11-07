const mongoose = requrie("mongoose");
var jwt = require("jsonwebtoken");

var Schema = mongoose.Schema;
var model = module.exports;

model.accessTokenLifetime = 20;

// const userSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     max: 255,
//   },
//   email: {
//     type: String,
//     required: true,
//     max: 20,
//   },
//   password: {
//     type: String,
//     required: true,
//     max: 255,
//   },
// });

module.exports = mongoose.model("User", userSchema);
