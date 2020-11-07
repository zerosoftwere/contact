const { Router } = require("express");
const { contactService } = require("../services");

const routes = Router();

routes.get("", async (req, res) => {
    const contacts = await contactService.list();
    return res.status(200).json(contacts);
});

routes.post('', async (req, res) => {
    const newContact = req.body;
    const contact = await contactService.create(newContact);

    return res.status(201).json(contact);
});

routes.get('/:id', async (req, res) => {
    const contact = await contactService.retrive(req.params.id);

    if (contact) return res.status(200).json(contact);
    return res.sendStatus(404);
});

routes.put('/:id', async (req, res) => {
    const newContact = req.body;
    const id = req.params.id;

    const contact = await contactService.update(id, contact);
    return res.status(200).json(contact);
});

routes.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await contactService.delete(id);
    
    if (result) return res.sendStatus(204);
    return res.sendStatus(404);
});

module.exports = routes;
