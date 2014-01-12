module.exports = {
'Ramaze tests': function (test) {
  test
    .open('http://ramaze.octohost.io/')
    .assert.title().is('Ramaze on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Ramaze', 'It has an H1')
    .done();
}
};