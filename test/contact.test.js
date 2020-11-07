const supertest = require("supertest");
const sinon = require("sinon");
const assert = require('assert');
const { contactService, authService } = require('../services');
const { application } = require("../application");

const agent = supertest.agent(application)

describe("Contacts", function() {

    beforeEach(async function () {
        const { token } = await authService.sign({username: 'test'});
        agent.set('Authorization', `Bearer ${token}`);
    });

    afterEach(function () {
        sinon.restore();
    });

    it("it should get all contacts", function(done) {
        sinon.stub(contactService, 'list').returns([]);
        agent.get("/contacts").expect(200).end((err, res) => {
            assert.deepStrictEqual(res.body, []);
            return done()
        });
    });

    it("it should get existing contact", function(done) {
      sinon.stub(contactService, 'retrive').withArgs('2').returns({});
      agent.get("/contacts/2").expect(200).end(done);
    });

    it("it should not get not none existing contact", function(done) {
        sinon.stub(contactService, 'retrive').withArgs('3').returns(null);
        agent.get("/contacts/3").expect(404).end(done);
      });

    it("it should create contact", function(done) {
        sinon.stub(contactService, 'create').returns({});
        agent.post("/contacts").expect(201).end(done);
    });

    it("it should delete contact", function(done) {
        sinon.stub(contactService, 'delete').returns({});
        agent.delete("/contacts/2").expect(204).end(done);
    });
});
