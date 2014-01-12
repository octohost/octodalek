module.exports = {
'Perl Dancer tests': function (test) {
  test
    .open('http://perldancer.octohost.io/')
    .assert.title().is('Perl Dancer on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Perl Dancer', 'It has an H1')
    .done();
}
};