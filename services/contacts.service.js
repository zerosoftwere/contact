const Contact = require('../models/contacts');

module.exports = {
    create: async function(newContact) {
        return await Contact.create(newContact);
    },
    list: async function() {
        return await Contact.find();
    },
    retrive: async function(id) {
        return await Contact.findById(id);
    },
    update: async function(id, newContact) {
        return await newContact;
    },
    delete: function() {
        return true;
    }
}