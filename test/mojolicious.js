module.exports = {
'Mojolicious tests': function (test) {
  test
    .open('http://mojolicious.octohost.io/')
    .assert.title().is('Mojolicious on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Mojo', 'It has an H1')
    .done();
}
};