const { Router } = require('express');
const { authService } = require('../services');

const routes = Router();

routes.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const tokens = await authService.authenticate(username, password);

    if (tokens) return res.status(200).json(tokens);
    return res.status(400).json('invalid credentials');
});

routes.post('/register', async (req, res) => {
    try {
        const user = await authService.register(req.body);
        return res.sendStatus(201);
    } catch (error) {
        return res.status(400).json(error);
    }
});

routes.post('/refresh', async (req, res) => {
    const { refreshToken } = req.body;
    return res.status(200).json({token: 'refreshtoken'});
})

module.exports = routes;
