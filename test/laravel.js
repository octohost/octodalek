module.exports = {
'Laravel tests': function (test) {
  test
    .open('http://laravel.octohost.io/')
    .assert.title().is('Laravel on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Laravel', 'It has an H1')
    .done();
}
};