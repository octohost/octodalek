module.exports = {
'Metalsmith tests': function (test) {
  test
    .open('http://metalsmith.octohost.io/')
    .assert.title().is('Metalsmith on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Metalsmith', 'It has an H1')
    .done();
}
};
