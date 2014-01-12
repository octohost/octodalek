module.exports = {
'Padrino tests': function (test) {
  test
    .open('http://padrino.octohost.io/')
    .assert.title().is('Padrino on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Padrino', 'It has an H1')
    .done();
}
};