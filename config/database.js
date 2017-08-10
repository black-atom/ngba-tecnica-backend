const R = require('ramda');
const getConfig = require('./index').getConfig;

const config = getConfig({
    development: {
        host:     "localhost",
        username: "redhat",
        password: "redhat",
        database: "teste_postgres"
    },

    test: {
        host:     "localhost",
        username: "redhat",
        password: "redhat",
        database: "teste_postgres"
    }
});

module.exports = config;