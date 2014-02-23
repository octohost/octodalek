module.exports = {
'Redis tests': function (test) {
  test
    .open('http://redis.octohost.io/')
    .assert.title().is('Persistent containers on octohost.', 'It has title')
    .assert.text('h2').is('Redis backed Hit Counter', 'It has an H2')
    .done();
}
};