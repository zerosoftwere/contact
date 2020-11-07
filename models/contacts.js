const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    max: 255,
  },
  lastname: {
    type: String,
    required: true,
    max: 255,
  },
  phone: {
    type: number,
    required: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
