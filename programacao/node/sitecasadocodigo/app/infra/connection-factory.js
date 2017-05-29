var mysql = require('mysql');

function createConnection() {

    var dbConfig = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo'
    };

    return mysql.createConnection(dbConfig);
}

module.exports = createConnection;