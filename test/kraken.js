module.exports = {
'Kraken tests': function (test) {
  test
    .open('http://kraken.octohost.io/')
    .assert.title().is('KrakenJS on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('KrakenJS', 'It has an H1')
    .done();
}
};