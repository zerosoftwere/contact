const { Router } = require("express");
const { contactService } = require("../services");
require("../db/mongoose");

const routes = Router();

routes.get("", (req, res) => {
  res.status(200).send(contactService.list());
});

routes.post('', (req, res) => {
    const newContact = req.body;

    const contact = contactService.create(newContact);
    res.status(201).json(contact);
});

routes.get('/:id', (req, res) => {
    const contact = contactService.retrive(req.params.id);
    if (contact) return res.status(200).json(contact);
    return res.sendStatus(404);
});

routes.put('/:id', (req, res) => {
    const newContact = req.body;
    const id = req.params.id;

    const contact = contactService.update(id, contact);
    res.status(200).json(contact);
});

routes.delete('/:id', (req, res) => {
    const id = req.params.id;
    const result = contactService.delete(id);
    
    if (result) return res.sendStatus(204);
    return res.sendStatus(404);
});

module.exports = routes;
