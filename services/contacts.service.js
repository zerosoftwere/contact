const contacts = [
    {id: 1, fnane: 'John', lname: 'Doe', phone: '000000000'},
    {id: 2, fnane: 'Jenny', lname: 'Doe', phone: '000000111'},
];

module.exports = {
    create: function(newContact) {
        contacts.push(newContact);
        return newContact;
    },
    list: function() {
        return contacts;
    },
    retrive: function(id) {
        return contacts.find(contact => contact.id == id);
    },
    update: function(id, newContact) {
        return newContact;
    },
    delete: function() {
        return true;
    }
}