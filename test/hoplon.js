module.exports = {
'Hoplon tests': function (test) {
  test
    .open('http://hoplon.octohost.io/')
    .assert.title().is('chat app', 'It has title')
    .done();
}
};