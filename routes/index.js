const { Router } = require("express");
const contacts = require("./contacts.route");
const auth = require("./auth.route");

function intialize(application) {
  application.use("/contacts", contacts);
  application.use("/auth", auth);
}

module.exports = {
  intialize,
};
