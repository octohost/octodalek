module.exports = {
'Slim tests': function (test) {
  test
    .open('http://slim.octohost.io/')
    .assert.title().is('Slim on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Slim', 'It has an H1')
    .done();
}
};