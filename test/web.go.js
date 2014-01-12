module.exports = {
'Web.go tests': function (test) {
  test
    .open('http://web.go.octohost.io/')
    .assert.title().is('web.go', 'It has title')
    .assert.text('#title').is('hello from octohost', 'It has an H1')
    .done();
}
};