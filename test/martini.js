module.exports = {
'Martini tests': function (test) {
  test
    .open('http://martini.octohost.io/')
    .assert.title().is('Martini on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Martini', 'It has an H1')
    .done();
}
};