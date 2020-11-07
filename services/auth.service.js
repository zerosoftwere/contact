const jwt = require('jsonwebtoken');
const { secret } = require('../config');
const userService = require('./user.service');

module.exports = {
    authenticate: async function(username, password) {
        const user = await userService.findByUsername(username);
        if (user.password !== password) return null;
        return this.sign(user);
    },

    refresh: async function(token) {
        try {
            const user = jwt.verify(token, secret);
            return this.sign(user);
        } catch (error) {
            return null;
        }
    },

    sign: async function(user) {
        const token = jwt.sign(user, secret, {expiresIn: 60});
        const refreshToken = jwt.sign(user, secret, {expiresIn: 3600});
        return {token, refreshToken};
    }
}