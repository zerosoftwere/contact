const http = require('http');
const mongoose = require('./db/mongoose');
const { application } = require('./application');

const port = process.env.PORT || 3000;

mongoose.initialize();
http.createServer(application).listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});
