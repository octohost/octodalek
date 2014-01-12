module.exports = {
'PHP 5 Nginx tests': function (test) {
  test
    .open('http://php5-nginx.octohost.io/')
    .assert.title().is('PHP5 / nginx on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('PHP5 / nginx', 'It has an H1')
    .done();
}
};