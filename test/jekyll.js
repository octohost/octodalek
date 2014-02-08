module.exports = {
'Jekyll tests': function (test) {
  test
    .open('http://jekyll.octohost.io/')
    .assert.title().is('Jekyll on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Jekyll', 'It has an H1')
    .done();
}
};