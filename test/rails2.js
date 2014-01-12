module.exports = {
'Rails 2 tests': function (test) {
  test
    .open('http://rails2.octohost.io/')
    .assert.title().is('Rails 2.3.x on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Rails 2.3.x', 'It has an H1')
    .done();
}
};