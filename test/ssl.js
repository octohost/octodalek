module.exports = {
'SSL static site test.': function (test) {
  test
    .open('https://ssl.octohost.io')
    .assert.title().is('Plain ol\' HTML on octohost', 'It has title')
    .done();
}
};