module.exports = {
'Memcached tests': function (test) {
  test
    .open('http://memcached.octohost.io/')
    .assert.title().is('Persistent containers on octohost.', 'It has title')
    .assert.text('h2').is('Memcache backed Hit Counter', 'It has an H2')
    .done();
}
};