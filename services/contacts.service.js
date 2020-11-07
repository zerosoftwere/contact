const Contact = require('../models/contacts');

module.exports = {
    create: async function(newContact) {
        const contact = new Contact(newContact);
        return await contact.save();
    },
    list: async function() {
        return await Contact.find();
    },
    retrive: function(id) {
        return Contact.findById(id);
    },
    update: function(id, newContact) {
        return newContact;
    },
    delete: function() {
        return true;
    }
}