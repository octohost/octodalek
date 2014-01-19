module.exports = {
'Play Framework tests': function (test) {
  test
    .open('http://play-app.octohost.io/')
    .assert.title().is('Play Framework on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Play Framework', 'It has an H1')
    .done();
}
};