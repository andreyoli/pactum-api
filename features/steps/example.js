const pactum = require('pactum');
const {settings} = require('pactum')
const { Given, When, Then, Before } = require('@cucumber/cucumber');

let spec = pactum.spec();

settings.setLogLevel('INFO')

Before(() => { spec = pactum.spec(); });

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