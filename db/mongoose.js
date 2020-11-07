const mongoose = require('mongoose');
const { dbUrl } = require('../config');

function initialize() {
    try {
        const db = mongoose.connect(dbUrl,
            {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true}
        );
        console.log('database successfully connected');
    } catch (error) {
        console.log('couldn\'t connect to db', e);
    } 
}

module.exports = { initialize }
