module.exports = {
'SSL octohost site test.': function (test) {
  test
    .open('https://www.octohost.io')
    .assert.title().is('octohost - Simple web focused Docker based mini-PaaS server.', 'It has title')
    .done();
}
};