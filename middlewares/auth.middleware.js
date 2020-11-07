const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = {    
    isAuthenticated: function(req, res, next) {
        try {
            const token = req.headers.authorization;
            if (!token) throw 'no token provided';

            const decoded = jwt.verify(token.split(' ')[1], secret);
            req.user = decoded;
            next();
        } catch (error) {
            return res.sendStatus(401);
        }
    }
}
