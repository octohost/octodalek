module.exports = {
'Hack tests': function (test) {
  test
    .open('http://hack.octohost.io/')
    .assert.url('http://hack.octohost.io/', 'URL is as expected')
    .done();
}
};
