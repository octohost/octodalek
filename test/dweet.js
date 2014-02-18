module.exports = {
'Dweet tests': function (test) {
  test
    .open('http://dweet.octohost.io/')
    .assert.title().is('Dweet.io Clone - written with Laravel PHP Framework', 'It has title')
    .assert.text('.welcome h1').is('Dweet.io Clone', 'It has an H1')
    .done();
}
};