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
        const contact = await Contact.findById(id);
        if (contact == null) return false;

        contact.lname = newContact.lname;
        contact.fname = newContact.fname;
        contact.phone = newContact.phone;

        return await Contact.update(contact);
    },

    delete: async function(id) {
        return await Contact.findByIdAndRemove(id);
    }
}
