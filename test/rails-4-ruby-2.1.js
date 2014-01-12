module.exports = {
'Rails 4 Ruby 2.1 tests': function (test) {
  test
    .open('http://rails4-ruby-2.1.octohost.io/')
    .assert.title().is('Rails 4.0.x on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Rails 4.0.x', 'It has an H1')
    .done();
}
};