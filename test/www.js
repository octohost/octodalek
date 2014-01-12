module.exports = {
'Main octohost site test.': function (test) {
  test
    .open('http://www.octohost.io')
    .assert.title().is('octohost', 'It has title')
    .done();
}
};