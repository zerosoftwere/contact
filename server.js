const http = require("http");
const { application } = require("./application");
const dotenv = require("dotenv");
const port = process.env.PORT || 3000;

dotenv.config();

http.createServer(application).listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
