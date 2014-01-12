module.exports = {
'Rails 3 tests': function (test) {
  test
    .open('http://rails3.octohost.io/')
    .assert.title().is('Rails 3.2.x on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Rails 3.2.x', 'It has an H1')
    .done();
}
};