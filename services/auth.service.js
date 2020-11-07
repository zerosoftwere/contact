const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secret } = require('../config');
const userService = require('./user.service');

module.exports = {
    authenticate: async function(username, password) {
        const user = await userService.findByUsername(username);
        if (user && bcrypt.compareSync(password, user.password))
            return this.sign(user);
        return null;
    },

    register: async function(newUser) {
        const passwordHash = bcrypt.hashSync(newUser.password, 2);
        const user = {username: newUser.username, password: passwordHash};
        return await userService.create(user);
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