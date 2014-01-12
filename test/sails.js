module.exports = {
'Sails tests': function (test) {
  test
    .open('http://sails.octohost.io/')
    .assert.title().is('Sails', 'It has title')
    .assert.text('.jumbotron h1').is('Sails.js', 'It has an H1')
    .done();
}
};