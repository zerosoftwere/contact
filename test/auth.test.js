const supertest = require("supertest");
const { hashSync } = require('bcrypt');
const sinon = require("sinon");

const { userService } = require('../services');
const { application } = require("../application");

const agent = supertest.agent(application);

describe("Authentication", function() {

    afterEach(function () {
        sinon.restore();
    });

    it("it should authenticate on valid credentials", function(done) {
        sinon.stub(userService, 'findByUsername').returns({username: 'test', password: hashSync('secret', 1)});

        agent.post("/auth/login").send({username: 'test', password: 'secret'})
            .expect(200).end(done);
    });


    it("it should not authenticate on invalid credentials", function(done) {
        sinon.stub(userService, 'findByUsername').returns({username: 'test', password: 'secret'});

        agent.post("/auth/login").send({username: 'test', password: 'secure'})
            .expect(400).end(done);
    });


    it("it should register new user", function(done) {
        sinon.stub(userService, 'create').returns({username: 'test', password: 'secret'});

        agent.post("/auth/register").send({username: 'test', password: 'secure'})
            .expect(201).end(done);
    });
});
