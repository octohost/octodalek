module.exports = {
'Dart tests': function (test) {
  test
    .open('http://dart.octohost.io/')
    .assert.title().is('Dart on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Dart', 'It has an H1')
    .done();
}
};
