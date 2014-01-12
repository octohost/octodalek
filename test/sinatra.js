module.exports = {
'Sinatra tests': function (test) {
  test
    .open('http://sinatra.octohost.io/')
    .assert.title().is('Sinatra on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Sinatra', 'It has an H1')
    .done();
}
};