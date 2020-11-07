const User = require('../models/users');

module.exports = {
    findBUsername: async function(username) {
        return await User.findOne({username});
    },

    list: async function() {
        return await User.find();
    },

    create: async function(newUser) {
        return await User.create(newUser);
    }
}