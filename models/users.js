const mongoose = requrie("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    max: 255,
  },
});

module.exports = mongoose.model("User", userSchema);
