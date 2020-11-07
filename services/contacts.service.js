const contacts = [
    {id: 1, fnane: 'John', lname: 'Doe', phone: '000000000'},
    {id: 2, fnane: 'Jenny', lname: 'Doe', phone: '000000111'},
];

module.exports = {
    list: function() {
        return contacts;
    },
    retrive: function(id) {
        return contacts.find(contact => contact.id == id);
    },
    update: function() {

    },
    delete: function() {

    }
}