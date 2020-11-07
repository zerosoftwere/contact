const supertest = require("supertest");
const { application } = require("../application");

describe("Application", function() {
  it("it should be up and running", function(done) {
    supertest(application).get("/").expect(200).end(done);
  });
});
