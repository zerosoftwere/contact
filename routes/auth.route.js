const { Router } = require("express");
const { authService, userService } = require('../services');

const routes = Router();

routes.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const tokens = await authService.authenticate(username, password);

    if (tokens) return res.status(200).json(tokens);
    return res.status(400).json('invalid credentials');
});

routes.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = await userService.create({username, password});

    return res.status(201).json(user);
});

routes.post('/refresh', async (req, res) => {
    const { refreshToken } = req.body;
    return res.status(200).json({token: 'refreshtoken'});
})

module.exports = routes;
