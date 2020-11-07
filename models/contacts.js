const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ContactSchema = new Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  phone: {type: String, required: true}
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
