module.exports = {
'HTML tests': function (test) {
  test
    .open('http://html.octohost.io/')
    .assert.title().is('Plain ol\' HTML on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('HTML', 'It has an H1')
    .done();
}
};