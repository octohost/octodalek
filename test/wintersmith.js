module.exports = {
'Wintersmith tests': function (test) {
  test
    .open('http://wintersmith.octohost.io/')
    .assert.title().is('Wintersmith on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Wintersmith', 'It has an H1')
    .done();
}
};
