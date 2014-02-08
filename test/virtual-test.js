module.exports = {
'Virtual Host tests': function (test) {
  test
    .open('http://virtual-test.octohost.io/')
    .assert.title().is('Virtual Host Example', 'It has title')
    .assert.text('.jumbotron h1').is('Virtual Host Example', 'It has an H1')
    .done();
},
'HTTPS Virtual Host tests': function (test) {
  test
    .open('https://virtual-test.octohost.io/')
    .assert.title().is('Virtual Host Example', 'It has title')
    .assert.text('.jumbotron h1').is('Virtual Host Example', 'It has an H1')
    .done();
},
'Other Domain Virtual Host tests': function (test) {
  test
    .open('http://another-virtual-host.octohost.io/')
    .assert.title().is('Virtual Host Example', 'It has title')
    .assert.text('.jumbotron h1').is('Virtual Host Example', 'It has an H1')
    .done();
},
'Froese Domain Virtual Host tests': function (test) {
  test
    .open('http://virtual-octo-test.froese.org/')
    .assert.title().is('Virtual Host Example', 'It has title')
    .assert.text('.jumbotron h1').is('Virtual Host Example', 'It has an H1')
    .done();
}
};