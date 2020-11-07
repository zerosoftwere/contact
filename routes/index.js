const { Router } = require('express');
const contacts = require('./contacts');
const auth = require('./auth');

function intialize(application) {
    application.use('/contacts', contacts);
    application.use('/auth', auth);
}

module.exports = {
    intialize
}