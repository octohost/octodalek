module.exports = {
'Harp tests': function (test) {
  test
    .open('http://harp.octohost.io/')
    .assert.title().is('Harp Js on octohost', 'It has title')
    .assert.text('.jumbotron h1').is('Harp', 'It has an H1')
    .done();
}
};