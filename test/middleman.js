module.exports = {
'Middleman tests': function (test) {
  test
    .open('http://middleman.octohost.io/')
    .assert.title().is('Middleman on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Middleman', 'It has an H1')
    .done();
}
};