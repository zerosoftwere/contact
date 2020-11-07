const jwt = require('jsonwebtoken');
const { secret } = require('../config');
const userService = require('./user.service');

module.exports = {
    authenticate: async function(username, password) {
        const user = await userService.findByUsername(username);
        console.log(username, password, user.password);
        if (user.password !== password) return null;

        const token = jwt.sign(user.toObject(), secret, {expiresIn: 60});
        const refreshToken = jwt.sign(user.toObject(), secret, {expiresIn: 3600});
        return {token, refreshToken};
    },

    refresh: async function(token) {
        
    }
}