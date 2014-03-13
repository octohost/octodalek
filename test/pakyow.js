module.exports = {
'Pakyow tests': function (test) {
  test
    .open('http://pakyow.octohost.io/')
    .assert.title().is('Pakyow on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Pakyow', 'It has an H1')
    .done();
}
};
