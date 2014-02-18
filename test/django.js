module.exports = {
'Django tests': function (test) {
  test
    .open('http://django.octohost.io/')
    .assert.title().is('Django on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Django', 'It has an H1')
    .done();
}
};