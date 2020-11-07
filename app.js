const express = require('express');
const morgan = require('morgan');
const body = require('body-parser');

const http = require('http');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello world');
})

module.exports = { app };