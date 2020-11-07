const { Router } = require('express');

const routes = Router();

routes.get('', (req, res) => {
    res.status(200).send('contacts');
});

routes.get('/:id', (req, res) => {
    res.status(200).send(req.params.id);
});

routes.put('/:id', (req, res) => {

});

routes.delete('/:id', (req, res) => {

});

module.exports = routes;