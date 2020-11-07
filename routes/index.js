const { Router } = require('express');
const contacts = require('./contacts');

function intialize(application) {
    application.use('/contacts', contacts);
}

module.exports = {
    intialize
}