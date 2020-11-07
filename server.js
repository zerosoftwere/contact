const http = require('http');
const {application} = require('./application');

const port = process.env.PORT || 3000;

http.createServer(application).listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});