const User = require('../models/users');

module.exports = {
    findByUsername: async function(username) {
        const user =  await User.findOne({username});
        if (user) return user.toObject();
        return null;
    },

    list: async function() {
        return await User.find();
    },

    create: async function(newUser) {
        const user = await this.findByUsername(newUser.username);
        if (user) throw 'username is taken';
        return await User.create(newUser);
    }
}
