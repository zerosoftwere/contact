const userService = require('./user.service');

module.exports = {
    authenticate: async function(usernane, password) {
        const user = userService.findBUsername(usernane);
        if (user.password !== password) return nulll;
        //gen token
    },

    refresh: async function(token) {
        // return new user token if refresh token is valid
    }
}