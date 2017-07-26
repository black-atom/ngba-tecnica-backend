const database = require('./database');

module.exports = (server) => {
    console.log("shutting down gracefully");

    server.close(function() {
        console.log("Closed out remaining http connections.");
        console.log("closing database connections");
        database.sequelize.close();
        process.exit()
    });
    
}