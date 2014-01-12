module.exports = {
'Rails 4 tests': function (test) {
  test
    .open('http://rails4.octohost.io/')
    .assert.title().is('Rails 4.0.x on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Rails 4.0.x', 'It has an H1')
    .done();
}
};