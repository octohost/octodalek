module.exports = {
'Revel tests': function (test) {
  test
    .open('http://revel.octohost.io/')
    .assert.title().is('Revel on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Revel', 'It has an H1')
    .done();
}
};