module.exports = {
'Octopress tests': function (test) {
  test
    .open('http://octopress.octohost.io/')
    .assert.title().is('Octopress on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Octopress', 'It has an H1')
    .done();
}
};