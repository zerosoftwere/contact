const contacts = require("./contacts.route");
const auth = require("./auth.route");
const { isAuthenticated } = require("../middlewares/auth.middleware");

function intialize(application) {
  application.use("/contacts", isAuthenticated, contacts);
  application.use("/auth", auth);
}

module.exports = { intialize };
