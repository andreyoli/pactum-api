const pactum = require('pactum');
const { Given, When, Then, BeforeAll, AfterAll, Before } = require('@cucumber/cucumber');

const pjr = require('pactum-json-reporter');
const { reporter } = require('pactum');

// global before block
BeforeAll(() => {
  reporter.add(pjr);
});

// global after block
AfterAll(() => {
  return reporter.end();
});

Before(() => {
  spec = pactum.spec();
});

Given('I make a GET request to {string}', function (url) {
  spec.get(url);
});

When('I receive a response', async function () {
  await spec.toss().then(a => {
    console.log(a.body)
  })
});

Then('response should have a status {int}', async function (code) {
  spec.response().should.have.status(code);
});