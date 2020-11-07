const { Router } = require("express");
const routes = Router();

routes.post('/login', (req, res) => {
  const { username, password } = req.body;

  res.status(200).json({ token: 'usertoken' });
});

routes.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  res.status(200).json({token: 'refreshtoken'});
})

module.exports = routes;
