const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ContactSchema = new Schema({
  id: ObjectId,
  fname: String,
  lname: String,
  phone: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
