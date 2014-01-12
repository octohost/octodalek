module.exports = {
'Ghost tests': function (test) {
  test
    .open('http://ghost.octohost.io/')
    .assert.title().is('Ghost on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Ghost', 'It has an H1')
    .done();
}
};