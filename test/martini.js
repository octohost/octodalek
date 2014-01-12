module.exports = {
'Martini tests': function (test) {
  test
    .open('http://martini.octohost.io/')
    .assert.title().is('martini', 'It has title')
    .assert.text('#title').is('Hello world!', 'It has an H1')
    .done();
}
};