const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');

const application = express();
application.use(morgan('dev'));
routes.intialize(application);


application.get('/', (req, res) => {
    res.status(200).json('hello world');
});

module.exports = { application };