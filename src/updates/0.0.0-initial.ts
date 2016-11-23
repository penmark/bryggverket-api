var keystone = require('keystone');
var Brewer = keystone.list('Brewer');

module.exports = function (done) {
    new Brewer.model({
        name: {
            first: 'Pontus',
            last: 'Enmark'
        },
        email: 'pontus@bryggverket.se',
        password: 'pontus',
        isAdmin: true
    })
        .save(done);
};