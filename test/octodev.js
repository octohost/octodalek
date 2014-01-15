module.exports = {
'octodev.io tests': function (test) {
  test
    .open('http://octodev.io/')
    .assert.title().is('Free wildcard dns - *.octodev.io', 'It has title')
    .assert.text('.jumbotron h1').is('octodev.io', 'It has an H1')
    .done();
}
};