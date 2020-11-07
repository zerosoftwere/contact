const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');

const application = express();
application.use(morgan('dev'));
application.use(bodyParser.json());

application.get('/', (req, res) => {
    res.status(200).json('hello world');
})

module.exports = { application };