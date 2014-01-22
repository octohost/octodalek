module.exports = {
'Hapi tests': function (test) {
  test
    .open('http://hapi.octohost.io/')
    .assert.url('http://hapi.octohost.io/', 'URL is as expected')
    .done();
}
};