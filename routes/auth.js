const { Router } = require("express");

const routes = Router();

routes.post('/login', (req, res) => {
    const { username, password } = req.body;

    res.status().json({token: '12345'});
});

module.exports = routes;
